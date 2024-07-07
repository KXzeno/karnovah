import React from 'react';
import { FEEDS } from '../page';

export default function Feed({ params }: { params: { feed: string }}): React.ReactNode {

  function verifyQuery(feed: string): Array<string | boolean> | false {
    for (let i = 0; i < FEEDS.length; i++) {
      if (feed === FEEDS[i][1]) return [feed, true];
      if (i === FEEDS.length - 1) return false;
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
          404
        </>
      }
    </>
  );
}

