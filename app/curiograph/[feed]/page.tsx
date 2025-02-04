import React from 'react';
import Feed from '@F/Feed';
import { readFeed } from '@A/FeedActions';

export default async function ExpandedFeed({ params }: { params: Promise<{ feed: string }>}): Promise<React.ReactNode> {
  let feeds = await readFeed();
  let feed = await params.then(res => res.feed);
  return (
    <>
      {<Feed src={feeds} filter={feed}/>}
    </>
  );
}

