import React from 'react';
import Feed from '@F/Feed';
import './posts.css';
import { readFeed } from '@A/FeedActions';

export default async function Curiograph() {
  let feeds = await readFeed();
  return (
    <>
      <span className='w-screen h-8 text-center text-xl'>
        <p>{feeds.length}</p>
      </span>
      <Feed src={feeds}/>
    </>
  );
};
