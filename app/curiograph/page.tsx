import React, {ReactNode} from 'react';
import Link from 'next/link';
import Parser from 'rss-parser';
import RSSParser from 'rss-parser';

let FEED_URLS: Array<string> = [
  'https://www.nasa.gov/feed/',
  'https://www.reddit.com/r/logHorizon.rss',
  'https://www.artofmanliness.com/feed/',
  'https://www.youtube.com/feeds/videos.xml?channel_id=UC7Gow-kNHq21oejSIDg9PAg',
  'https://www.youtube.com/feeds/videos.xml?channel_id=UC4YaOt1yT-ZeyB0OmxHgolA',
] as const;

let parser: Parser = new RSSParser();

let parse: (url: string) => Promise<object>  = async url => {
  let feed: { items: object } = await parser.parseURL(url);
  if (!(feed && feed.items)) throw new Error('Invalid RSS URL');
  // console.log(Object.getOwnPropertyNames(feed));
  return feed.items as Array<object>;
}

export default async function Curiograph() {
  let feeds: Array<object> = [];

    interface PostData {
      title: String,
      link: String,
      description: String,
      pubDate: String,
      guid: String,
    }


  async function compilePosts(arr: Array<string>): Promise<Array<object>> {
    for (let i = 0; i < arr.length; i++) {
      let post = await parse(arr[i]);
      feeds.push(post);
    }
    return [feeds[0]];
  }

  await compilePosts(FEED_URLS);

  let FEED_COUNT: number = feeds.length;

  function renderPosts(data: PostData, index: number) {
    // console.log(data);
    return (
      <>
        <div className='mb-2'>
          <Link 
            href={`${data.link}`}
            className='text-inherit no-underline hover:underline text-sm'
          >
            {data.title}
          </Link>
        </div>
        <p className='text-xs'>
          {data.description || data.contentSnippet}
        </p>
      </>
    )
  }

  function displayPosts(): ReactNode {
    if (feeds[0] === undefined) return;
    let posts: Array<object> = [];

    for (let i = 0; i < Object.keys(feeds[0]).length; i++) {
      // Capacity limiter
      if (i >= 2) break;
      posts.push(feeds[0][i]);
    }

    feeds.shift();

    return (
      <>
        <div className='grid grid-cols-subgrid place-self-center'>
          {posts.map((data: PostData, index: number) => {
            return (
              <div 
                key={`${index}-${data.title}`}
                className={`col-start-${(FEED_COUNT + 1 - feeds.length) % 2 === 0 ? 1 : 2} 
                  col-span-1 text-left ${index === 0 ? 'text-inherit' : 'text-inherit'} my-auto`}
              >
                {renderPosts(data, index)}
              </div>
            )
          })}
        </div>
        {displayPosts()}
      </>
    )
  }

  /* 
   * TODO: Use data structures to separate the feeds
   * as separate react nodes, and auto fill the grid as
   * a 2 column
   */

  return (
    <div className='relative min-h-screen w-screen mx-auto'>
      <div className='grid grid-cols-1 gap-1 divide-y divide-neutral-500'>
        {displayPosts()}
      </div>
    </div>
  );
};
