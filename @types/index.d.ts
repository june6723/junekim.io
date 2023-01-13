import { ParsedUrlQuery } from 'querystring';

declare global {
  interface Link {
    title: string;
    link: string;
  }
  interface IParams extends ParsedUrlQuery {
    slug: string;
  }
}

export {};
