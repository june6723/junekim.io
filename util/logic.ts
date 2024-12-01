import { DocumentTypes } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export const documentByDateDesc = (a: DocumentTypes, b: DocumentTypes) =>
  compareDesc(new Date(a.date), new Date(b.date));

export const filterPublishedDocuments = <T extends DocumentTypes>(document: T) => document.status === 'published';

export const filterDraftDocuments = <T extends DocumentTypes>(document: T) => document.status === 'draft';

export const getPathByType = (document: DocumentTypes) => {
  switch (document.type) {
    case 'Post':
      return 'blog';
    case 'Shorts':
      return 'shorts';
  }
};
