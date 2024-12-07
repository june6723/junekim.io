import type { Metadata as NextMetadata } from 'next';
import metaData from '@/data/metaData';

export const metadata: NextMetadata = {
  title: metaData.title,
  description: metaData.description,
  openGraph: {
    siteName: metaData.siteName,
    url: metaData.url,
    type: 'website',
    title: metaData.title,
    images: metaData.image,
  },
  twitter: {
    card: 'summary_large_image',
    site: metaData.twitterName,
    title: metaData.title,
    description: metaData.description,
    images: metaData.image,
  },
};

export default function Page() {
  return '...';
}
