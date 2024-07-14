'use server';

import Parser from 'rss-parser';
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
// import { readReplicas } from '@prisma/extension-read-replicas';

let prisma = new PrismaClient();

interface SourceModel {
  id: number,
  link: string,
  name: string,
}

interface PostData {
  title: string,
  link: string,
  description?: string,
  pubDate?: string,
  guid?: string,
  contentSnippet?: string,
  content: string,
  author?: string,
  id?: string,
  ['content:encoded']?: string;
}

async function main() {
  return await prisma.source.findMany();
}

export async function getData(): Promise<SourceModel[]> {
  return main().then(async (res) => {
    console.log(res);
    return res;
  }).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
}

export async function readFeed(filter?: string) {
  interface Feed {
    [key: number]: PostData
  }

  let fsrcs: SourceModel[] = await getData();

  let parser: Parser = new Parser();

  let feeds: Array<Feed> = [];

  let parse: (url: string) => Promise<object> = async url => {
    let feed: { items: object } = await parser.parseURL(url);
    if (!(feed && feed.items)) throw new Error('Invalid RSS URL');
    // console.log(Object.getOwnPropertyNames(feed));
    return feed.items as Array<object>;
  }

  async function compilePosts(arr: Array<SourceModel>): Promise<Array<object>> {
    arr.filter(e => e.name === filter);
    for (let i = 0; i < arr.length; i++) {
      let post: object = await parse(arr[i].link);
      feeds.push(post as Feed);
    }
    return [feeds[0]];
  }

  await compilePosts(fsrcs);

  return feeds;
}
