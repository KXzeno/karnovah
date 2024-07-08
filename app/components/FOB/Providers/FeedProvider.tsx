'use client';
import React from 'react';
import Link from 'next/link';
import Parser from 'rss-parser';
import FEED_SRCS from '@F/Feed/feeds.json';

export const FeedContext = React.createContext({});

export default function FeedProvider({
  children,
}: { children: React.ReactNode }) {

}
