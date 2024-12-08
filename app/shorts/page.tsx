import Container from 'components/Container';
import DraftPreview from 'components/DraftPreview';
import ShortsItem from 'components/ShortsItem';
import { allShorts } from 'contentlayer/generated';
import { documentByDateDesc, filterDraftDocuments, filterPublishedDocuments } from 'util/logic';
import metaData from '@/data/metaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${metaData.title} | Shorts`,
  description: metaData.description,
  openGraph: {
    siteName: metaData.siteName,
    url: metaData.url,
    type: 'website',
    title: `${metaData.title} | Shorts`,
    images: metaData.image,
  },
  twitter: {
    card: 'summary_large_image',
    site: metaData.twitterName,
    title: `${metaData.title} | Shorts`,
    description: metaData.description,
    images: metaData.image,
  },
};

export default function ShortsList() {
  const isDev = process.env.NODE_ENV === 'development';

  const drafts = isDev ? allShorts.filter(filterDraftDocuments).sort(documentByDateDesc) : null;
  const shorts = allShorts.filter(filterPublishedDocuments).sort(documentByDateDesc);

  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        {drafts?.map(drafts => (
          <DraftPreview key={drafts._id} draft={drafts} />
        ))}
        {shorts.map(shorts => (
          <ShortsItem key={shorts._id} shorts={shorts} />
        ))}
      </div>
    </Container>
  );
}
