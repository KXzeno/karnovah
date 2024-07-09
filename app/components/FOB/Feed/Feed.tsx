import React from 'react';
import Parser from 'rss-parser';
import Link from 'next/link';
import FEED_SRCS from '@F/Feed/feeds.json';
import { notFound } from 'next/navigation';
import 'dotenv/config';

/* For manual ID fetch:
   ytInitialData.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.endpoint.browseEndpoint.browseId
 */

interface FeedParams {
  filter?: string,
}

export default async function Feed({ filter = undefined }: FeedParams): Promise<React.ReactElement> {
  if (filter !== undefined) {
    let validateFilter: boolean = !!(Object.values(FEED_SRCS).find(e => e.includes(filter)));
    if (!validateFilter || filter.length === 0) {
      notFound();
    }
  }

  let parser: Parser = new Parser();

  let parse: (url: string) => Promise<object>  = async url => {
    let feed: { items: object } = await parser.parseURL(url);
    if (!(feed && feed.items)) throw new Error('Invalid RSS URL');
    // console.log(Object.getOwnPropertyNames(feed));
    return feed.items as Array<object>;
  }

  let feeds: Array<object> = [];

  interface Feed {
    [key: number]: {
      [key: number]: {
        [key: number]: string
      }
    }
  }

  interface PostData {
    title?: string,
    link?: string,
    description?: string,
    pubDate?: string,
    guid?: string,
    contentSnippet?: string,
    author?: string,
    id?: string,
  }

  async function compilePosts(arr: Array<string[]>): Promise<Array<object>> {
    if (filter !== undefined) {
      arr = arr.filter(item => item[1] === filter);
    }

    arr.filter(e => e[1] === 'Kizuna');
    for (let i = 0; i < arr.length; i++) {
      let post = await parse(arr[i][0]);
      feeds.push(post);
    }
    return [feeds[0]];
  }

  function spreadObjToArr(o: { [key: string]: string }): Array<string[]> {
    let newArray: Array<string[]> = [];
    Object.keys(o).forEach(key => {
      let dmarc: number = o[key].indexOf(',');
      let arrContent1: string = o[key].substring(0, dmarc);
      let arrContent2: string = o[key].substring(dmarc + 1);
      newArray.push([arrContent1, arrContent2]);
    });
    return newArray;
  }

  let srcs = spreadObjToArr(FEED_SRCS);
  await compilePosts(srcs);

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

    return (
      <>
        <div 
          className={`my-2`}
        >
          <Link 
            href={`${data.link}`}
            className={`text-cyan-400 no-underline hover:underline text-sm text-ellipsis truncate text-wrap max-sm:text-balance`}
            rel='noreferrer'
            target='_blank'
          >
            {!isVideo ? <p>{data.title}</p> : <p className='truncate text-ellipsis max-sm:text-balance text-balance text-center'>{data.title}</p>}
          </Link>
          {data.id === undefined || isVideo === false ? 
            <p className='text-xs text-slate-300 sm:text-pretty'>
              {data.description || data.contentSnippet}
            </p> :
              <div>
                <iframe className={`video w-[270px] h-[200px] mx-auto`}
                  allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture fullscreen"
                  title='Youtube video player'
                  src={`https://youtube.com/embed/${data.id.substring(9)}?autoplay=0`}>
                </iframe>
              </div>}
        </div>
      </>
    )
  }

  function displayPosts(): React.ReactNode {
    if (feeds[0] === undefined) return;
    let posts: Array<object> = [];

    for (let i = 0; i < Object.keys(feeds[0]).length; i++) {
      // Capacity limiter
      if (filter === undefined && i >= 3) break;
      posts.push((feeds as Feed)[0][i]);
    }

    feeds.shift();
    return (
      <>
        <div className='relative grid grid-cols-3 place-items-start max-sm:place-items-center w-full max-sm:max-w-[79%] mx-auto'>
          {posts.map((data: PostData, index: number) => {
            return (
              <>
                <div 
                  key={`${index}-${data.title}`}
                  className={`col-span-${(data.id && data.id !== undefined && data.id.substring(0,2) === 'yt') || false ? '1 place-self-center' : '3'}
                    max-sm:col-span-3 sm:max-[1420px]:col-span-2 text-left max-sm:text-center ${index === 0 ? 'text-inherit' : 'text-inherit'} my-auto`}
                >
                  {renderPosts(data)}
                </div>
                {(index + 1 === posts.length) && filter === undefined ? 
                  <div className='inline-flex relative min-w-full min-h-4 col-span-3 text-right'>
                    <Link className='absolute text-xs no-underline hover:underline italic mx-auto inset-x-0' href={`./curiograph/${srcs[FEED_COUNT - feeds.length - 1][1]}`}>Amble</Link>
                  </div>
                  :
                  <></>}
              </>
            )
          })}
        </div>
        {displayPosts()}
      </>
    )
  }

  return (
    <div className='relative min-h-screen min-w-[300px] max-w-[59%] max-sm:max-w-[500px] mx-auto'>
      <div className='grid grid-cols-1 gap-1 divide-y divide-neutral-500'>
        {displayPosts()}
      </div>
    </div>
  )
}
