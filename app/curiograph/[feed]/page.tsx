import React from 'react';
import FEED_SRCS from '@P/feeds.json';

export default function Feed({ params }: { params: { feed: string }}): React.ReactNode {

  function verifyQuery(feed: string): Array<string | boolean> | false {
    for (let i = 0; i < Object.keys(FEED_SRCS).length; i++) {
      if (FEED_SRCS[i] && feed === FEED_SRCS[i].substring(FEED_SRCS[i].indexOf(',') + 1)) return [feed, true];
      if (i === Object.keys(FEED_SRCS).length - 1) return false;
    }
  }

  let QUERY_CHECK = verifyQuery(params.feed);

  return (
    <>
      {QUERY_CHECK ? 
        <>
          <h1>ID: {params.feed}</h1>
        </>
        :
        <>
          y
        </>
      }
    </>
  );
}

