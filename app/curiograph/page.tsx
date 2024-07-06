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
  'https://www.artofmanliness.com/feed/'
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

  async function compilePosts(arr: Array<string>): Promise<Array<object>> {
    for (let i = 0; i < arr.length; i++) {
      let post = await parse(arr[i]);
      feeds.push(post);
    }
    return [feeds[0]];
  }

  await compilePosts(FEED_URLS);

  let FEED_COUNT: number = feeds.length;

  function displayPosts(): ReactNode {
    if (feeds[0] === undefined) return;
    let posts: Array<object> = [];

    for (let i = 0; i < Object.keys(feeds[0]).length; i++) {
      posts.push(feeds[0][i]);
    }

    feeds.shift();

    interface PostData {
      title: String,
      link: String,
      description: String,
      pubDate: String,
      guid: String,
    }

    return [posts.map((data: PostData, index: number) => {
      return (
        <div key={`index + ${data.title}`} className={`col-start-${(FEED_COUNT + 1 - feeds.length) % 2 === 0 ? 1 : 2} col-span-1 text-center ${index === 0 ? 'text-red-700' : 'text-inherit'}`}>
          {data.title}
        </div>
      )
    }), displayPosts()];
  }

  /* 
   * TODO: Use data structures to separate the feeds
   * as separate react nodes, and auto fill the grid as
   * a 2 column
   */

  return (
    <div className='relative min-h-screen w-screen'>
      <div className='grid grid-cols-2 grid-flow-row-dense'>
        {displayPosts()}
      </div>
    </div>
  );
};
