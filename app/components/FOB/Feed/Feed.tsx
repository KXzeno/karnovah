import React from 'react';
import Parser from 'rss-parser';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import 'dotenv/config';
import pg from 'pg';
import { PrismaClient } from '@prisma/client';

/* For manual ID fetch:
   ytInitialData.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.endpoint.browseEndpoint.browseId
 */

let prisma = new PrismaClient();

async function main() {
  return await prisma.source.findMany();
}

async function getData() {
  return main().then(async (res) => {
    return res;
  }).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
}

/*
   let db = new pg.Client({
user: 'avnadmin',
password: process.env.DB_PASS_AIVEN,
host: 'rss-feeds-kasz.e.aivencloud.com',
port: 22108,
database: 'defaultdb',
ssl: {
rejectUnauthorized: true,
ca: process.env.DB_CA_CERT,
},
});

db.connect();

let fsrcs: any;

db.query('SELECT * FROM Source', async (err, res) => {

try {
fsrcs = res.rows;
// console.log(fsrcs, FEED_SRCS);
} catch (e) {
console.error('Query execution failed', e, err.stack);
} finally {
await db.end()
}
}); */

interface FeedParams {
  filter?: string,
}

export default async function Feed({ filter = undefined }: FeedParams): Promise<React.ReactElement> {
  let fsrcs = await getData();
  if (filter !== undefined) {
    let validateFilter: boolean = !!(fsrcs.find(({ name }: { name: string }) => name.includes(filter)));
    if (!validateFilter || filter.length === 0) {
      notFound();
    }
  }

  let parser: Parser = new Parser();

  let parse: (url: string) => Promise<object> = async url => {
    let feed: { items: object } = await parser.parseURL(url);
    if (!(feed && feed.items)) throw new Error('Invalid RSS URL');
    // console.log(Object.getOwnPropertyNames(feed));
    return feed.items as Array<object>;
  }

  let feeds: Array<Feed> = [];

  interface Feed {
    [key: number]: PostData
  }

  interface PostData {
    title: string,
    link: string,
    description?: string,
    pubDate?: string,
    guid?: string,
    contentSnippet?: string,
    content: string,
    author?: string,
    id?: string,
    ['content:encoded']?: string;
  }

  interface SourceModel {
    id: number,
    link: string,
    name: string,
  }

  async function compilePosts(arr: Array<SourceModel>): Promise<Array<object>> {
    if (filter !== undefined) {
      arr = arr.filter(item => item.name === filter);
    }

    arr.filter(e => e.name === filter);
    for (let i = 0; i < arr.length; i++) {
      let post: object = await parse(arr[i].link);
      feeds.push(post as Feed);
    }
    return [feeds[0]];
  }

 // function spreadObjToArr(o: { [key: string]: string }): Array<string[]> {
 //   let newArray: Array<string[]> = [];
 //   Object.keys(o).forEach(key => {
 //     let dmarc: number = o[key].indexOf(',');
 //     let arrContent1: string = o[key].substring(0, dmarc);
 //     let arrContent2: string = o[key].substring(dmarc + 1);
 //     newArray.push([arrContent1, arrContent2]);
 //   });
 //   return newArray;
 // }

 // let srcs = spreadObjToArr(FEED_SRCS);
  await compilePosts(fsrcs);
  let FEED_COUNT: number = feeds.length;

  //TODO: Fix truncation on long names
  function renderPosts(data: PostData) {
    // console.log(data);
    if (data === undefined) {
      throw new Error('Incorrect Data Submitted.');
    }

    let isVideo: boolean = (data.id && data.id !== undefined && data.id.substring(0,2) === 'yt') || false;
    if (data.contentSnippet && data.contentSnippet.includes(`${process.env.needless}`)) {
      data.contentSnippet = data.contentSnippet.substring(0, data.contentSnippet.length - 101);
    }

    if (isVideo && data.id === undefined) {
      throw new Error('Video ID not found.');
    }

    if (filter && data.content !== undefined) {
      let markup = { __html: data['content:encoded'] || data.content };
      return (
        <article dangerouslySetInnerHTML={markup} />
      )
    }
    return (
      <>
        <hgroup 
          className='feed-card'
        >
          <Link 
            href={`${data.link}`}
            className='feed-link'
            rel='noreferrer'
            target='_blank'
          >
            {!isVideo ? <nav>{data.title}</nav> : <nav className='feed-title'>{data.title}</nav>}
          </Link>
          {data.id === undefined || isVideo === false ? 
            <header className='feed-desc'>
              {data.description || data.contentSnippet}
            </header> :
              <iframe className='feed-embed'
                allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture fullscreen"
                title='Youtube video player'
                src={`https://youtube.com/embed/${data.id.substring(9)}?autoplay=0`}>
              </iframe>
          }
        </hgroup>
      </>
    )
  }

  function displayPosts(): React.ReactNode {
    if (feeds[0] === undefined) return;
    let posts: Array<PostData> = [];

    for (let i = 0; i < Object.keys(feeds[0]).length; i++) {
      // Capacity limiter
      if (filter === undefined && i >= 3) break;
      posts.push(feeds[0][i]);
    }

    if (posts.length < 1) throw new Error('Zero posts are stored.');

    feeds.shift();
    return (
      <>
        <section className='feed-ctr'>
          {posts.map((data: PostData, index: number) => {
            return (
              <>
                <article 
                  key={`${index}-${data.title}`}
                  className={`${(data.id && data.id !== undefined && data.id.substring(0,2) === 'yt') || false ? 
                    `feed-child ${index + 1 === posts.length ? `sm:max-[1420px]:hidden` : null} ${index === posts.length - 2 ? 'sm:max-[1420px]:col-start-3' : null}` 
                    : 
                      'feed-child-5'} feed-child-2`}
                >
                  {renderPosts(data)}
                </article>
                {(index + 1 === posts.length) && filter === undefined ? 
                  <nav className='view-more'>
                    <Link className='amble' href={`./curiograph/${fsrcs[FEED_COUNT - feeds.length - 1].name}`}>Amble</Link>
                  </nav>
                  :
                  <></>}
              </>
            )
          })}
        </section>
        {displayPosts()}
      </>
    )
  }

  return (
    <main className='primary'>
      <article className='primary-grid'>
        {displayPosts()}
      </article>
    </main>
  )
}
