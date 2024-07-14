import React from 'react';
import Feed from '@F/Feed';
import { readFeed } from '@A/FeedActions';

export default async function ExpandedFeed({ params }: { params: { feed: string }}): Promise<React.ReactNode> {
  let feeds = await readFeed();
  return (
    <>
      <Feed src={feeds} filter={params.feed}/>
    </>
  );
}

