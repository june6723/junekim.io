import { DocumentTypes } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export const documentByDateDesc = (a: DocumentTypes, b: DocumentTypes) =>
  compareDesc(new Date(a.date), new Date(b.date));
