import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import 'dotenv/config';
// import pg from 'pg';

import { readFeed, getData } from '@/actions';

interface FeedParams {
  filter?: string;
  src: Feed[];
}

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

export default async function Feed({ filter = undefined, src }: FeedParams): Promise<React.ReactElement> {
  let fsrcs = await getData();
  // let feeds = await readFeed();
  let feeds = src;
  let FEED_COUNT = feeds.length;

  if (filter !== undefined) {
    let validateFilter: boolean = !!(fsrcs.find(({ name }: { name: string }) => name.includes(filter)));
    if (!validateFilter || filter.length === 0) {
      notFound();
    }
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

  function renderPosts(data: PostData) {
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
