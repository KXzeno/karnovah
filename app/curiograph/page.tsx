import React, {ReactNode} from 'react';
import Link from 'next/link';
import Parser from 'rss-parser';
import RSSParser from 'rss-parser';

// TODO: Reduce provider workload on updating RSS lists
// TODO: Demarcate RFCS, use this as client RFC and merge
// with server RFC

let FEED_URLS: Array<string> = [
  'https://www.nasa.gov/feed/',
  'https://www.reddit.com/r/logHorizon.rss',
  'https://www.artofmanliness.com/feed/',
  'https://www.youtube.com/feeds/videos.xml?channel_id=UC7Gow-kNHq21oejSIDg9PAg',
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

    return (
      <>
         <div key={`index + ${data.title}`} className={`col-start-${(FEED_COUNT + 1 - feeds.length) % 2 === 0 ? 1 : 2} col-span-1 text-center ${index === 0 ? 'text-red-700' : 'text-inherit'}`}>
           <Link 
             href={`${data.link}`}
             className='text-inherit no-underline hover:underline'
           >
             {data.title}
           </Link>
         </div>
      </>
    )
  }

  function displayPosts(): ReactNode {
    if (feeds[0] === undefined) return;
    let posts: Array<object> = [];

    for (let i = 0; i < Object.keys(feeds[0]).length; i++) {
      // Capacity limiter
      // if (i >= 10) break;
      posts.push(feeds[0][i]);
    }

    feeds.shift();

    //TODO: Recursion inside method for nested items + subgrid

    return (
      <>
        <div className=/*'grid grid-cols-subgrid h-max'*/'inline-flex flex-col'>
          {posts.map((data: PostData, index: number) => {
            return (
              <>
              {renderPosts(data, index)}
              </>
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
    <div className='relative min-h-screen w-screen'>
      <div className='grid grid-cols-2'>
        {displayPosts()}
      </div>
    </div>
  );
};
