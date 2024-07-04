import React, {ReactNode} from 'react';
import Link from 'next/link';
import Parser from 'rss-parser';
import RSSParser from 'rss-parser';

// TODO: Reduce provider workload on updating RSS lists

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

  for (let i = 0; i < FEED_URLS.length; i++) {
    let post = await parse(FEED_URLS[i]);
    feeds.push(post);
  }

  function compilePosts(arr: Array<object>): Array<object> {
    let postStack: Array<object> = [];
    let SOURCE_COUNT = Object.keys(arr).length as const;
    for (let i = 0; i < SOURCE_COUNT; i++) {
      let source = arr[i];
      let posts = Object.values(source);
      for (let j = 0; j < posts.length; j++) {
        postStack.push(source[j]);
      }
      postStack.push({ terminal: true });
    }
    return postStack;
  }

  function displayPosts(arr: Array<object>, refragment: boolean = false): ReactNode {
    let compiledFeed: Array<object>;
    let fragment: number = 1;
    compiledFeed = (refragment) ? arr : compilePosts(arr);
    return Object.values(compiledFeed).map(({ title, link, description, pubDate, guid, terminal }, index) => {
      compiledFeed.shift();
      if (terminal && terminal === true) {
        fragment++;
        displayPosts(compiledFeed, true);
        return;
      }

      return (
        <div className={`grid grid-cols-subgrid col-start-${fragment % 2 + 1}`} key={title}>
          {<Link href={link}>{title}</Link>}
        </div>
      )
    }) as ReactNode
  }

  return (
    <div className='relative min-h-screen w-screen'>
      <div className='grid grid-cols-2 text-center'>
        {displayPosts(feeds)}
      </div>
    </div>
  );
};
