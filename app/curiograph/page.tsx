import React from 'react';
import Link from 'next/link';
import Parser from 'rss-parser';
import RSSParser from 'rss-parser';

// TODO: Reduce provider workload on updating RSS lists

let FEED_URLS: Array<string> = ['https://www.nasa.gov/feed/',
  'https://www.reddit.com/r/logHorizon.rss'] as const;

let parser: Parser = new RSSParser();

let parse: (url: string) => Promise<object>  = async url => {
  let feed: { items: object } = await parser.parseURL(url);
  if (!(feed && feed.items)) throw new Error('Invalid RSS URL');
  // console.log(Object.getOwnPropertyNames(feed));
  return feed.items as Array<object>;
}

export default async function Curiograph() {
  let feeds: Array<object> = [await parse(FEED_URLS[0]), await parse(FEED_URLS[1])];

  return (
    <div className='relative min-h-screen w-screen'>
      <div className='flex-row text-center space-y-4'>
        <p>Begins here</p>
        {Object.values(feeds[0]).map(({ title, link, description, pubDate, guid }) => {
            return (
              <div key={pubDate}>
                <Link href={link} >{title}</Link>
              </div>);
          })}
      </div>
    </div>
  );
};
