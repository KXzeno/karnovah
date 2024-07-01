import React from 'react';
import Link from 'next/link';
import Parser from 'rss-parser';
import RSSParser from 'rss-parser';

let FEED_URL: string = 'https://www.nasa.gov/feed/' as const;

let parser: Parser = new RSSParser();

let parse: (url: string) => Promise<object>  = async url => {
  let feed: object = await parser.parseURL(url);
  if (!(feed && feed.items)) throw new Error('Invalid RSS URL');
  return feed.items as Array<object>;
}

export default async function Curiograph() {
  let feed = await parse(FEED_URL);

  return (
    <div className='relative min-h-screen w-screen'>
      <div className='flex-row text-center space-y-4'>
        <p>Begins here</p>
        {Object.values(feed).map(({ title, link, description, pubDate, guid }) => {
            return (
              <div>
                <Link href={link} >{title}</Link>
              </div>);
          })}
      </div>
    </div>
  );
};
