import { ParsedUrlQuery } from 'querystring';

declare global {
  interface Link {
    title: string;
    link: string;
  }
  interface IParams extends ParsedUrlQuery {
    slug: string;
  }

  interface MetaData {
    title: string;
    url: string;
    siteName: string;
    description: string;
    image: string;
    twitterName: string;
    date?: string;
  }
}

export {};
