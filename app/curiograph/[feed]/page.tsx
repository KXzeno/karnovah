import React from 'react';
import Feed from '@F/Feed';

export default function ExpandedFeed({ params }: { params: { feed: string }}): React.ReactNode {
  return (
    <>
      <Feed filter={params.feed}/>
    </>
  );
}

