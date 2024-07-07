import React, {ReactNode} from 'react';
import Link from 'next/link';
import Parser from 'rss-parser';
import RSSParser from 'rss-parser';

/* For manual ID fetch:
 ytInitialData.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.endpoint.browseEndpoint.browseId
 */

export const FEED_URLS: Array<string[]> = [
  ['https://www.nasa.gov/feed/', 'NASA'],
  ['https://www.reddit.com/r/logHorizon.rss', 'logH'],
  ['https://www.artofmanliness.com/feed/', 'art-of-manliness'],
  ['https://www.youtube.com/feeds/videos.xml?channel_id=UC7Gow-kNHq21oejSIDg9PAg', 'Koko'],
  ['https://www.youtube.com/feeds/videos.xml?channel_id=UC4YaOt1yT-ZeyB0OmxHgolA', 'Kizuna'],
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
      contentSnippet: String,
      author: String,
      id: String,
    }

  async function compilePosts(arr: Array<string[]>): Promise<Array<object>> {
    for (let i = 0; i < arr.length; i++) {
      let post = await parse(arr[i][0]);
      feeds.push(post);
    }
    return [feeds[0]];
  }

  await compilePosts(FEED_URLS);

  let FEED_COUNT: number = feeds.length;

  function renderPosts(data: PostData, index: number) {
    // console.log(data);
    let isVideo: boolean = (data.id && data.id !== undefined && data.id.substring(0,2) === 'yt') || false;
    return (
      <>
        <div 
          className={`my-2 
          ${isVideo && index % 2 === 0 ? 'text-left text-ellipsis' : ''}
          ${isVideo && index % 2 === 1 ? 'text-right text-ellipsis' : ''}
          `}
        >
          <Link 
            href={`${data.link}`}
            className={`text-cyan-400 no-underline hover:underline text-sm text-ellipsis truncate`}
          >
            {data.title}
          </Link>
          {isVideo === false ? 
            <p className='text-xs text-slate-300'>
              {data.description || data.contentSnippet}
            </p> :
              <iframe className={`video w-[270px] h-[175px] ${index % 2 === 1 ? 'ml-auto' : 'mr-auto'}`}
                allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture fullscreen"
                title='Youtube video player'
                src={`https://youtube.com/embed/${data.id.substring(9)}?autoplay=0`}>
              </iframe>}
        </div>
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
        <div className='grid grid-cols-2 place-self-center'>
          {posts.map((data: PostData, index: number) => {
            return (
              <div 
                key={`${index}-${data.title}`}
                className={`col-start-${(FEED_COUNT + 1 - feeds.length) % 2 === 0 ? 1 : 2} 
                  col-span-${(data.id && data.id !== undefined && data.id.substring(0,2) === 'yt') || false ? '1 gap-4' : '2'}
                  text-left ${index === 0 ? 'text-inherit' : 'text-inherit'} my-auto`}
              >
                {renderPosts(data, index)}
                {index + 1 === posts.length ? 
                  <div className='inline-flex relative w-full min-h-4 col-span-2 text-right'>
                      <Link className='absolute text-xs no-underline italic mx-auto inset-x-0' href='/yes'>Amble {FEED_COUNT - feeds.length - 1}</Link>
                  </div>
                  :
                  <></>}
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
    <div className='relative min-h-screen min-w-[300px] max-w-[59%] mx-auto'>
      <div className='grid grid-cols-1 gap-1 divide-y divide-neutral-500'>
        {displayPosts()}
      </div>
    </div>
  );
};
