import { Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export const postByDateDesc = (a: Post, b: Post) => compareDesc(new Date(a.date), new Date(b.date));
