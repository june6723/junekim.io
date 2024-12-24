import DraftPreview from 'components/DraftPreview';
import { allPosts } from 'contentlayer/generated';
import { documentByDateDesc, filterDraftDocuments, filterPublishedDocuments } from 'util/logic';
import BlogPost from '../../components/BlogPost';
import Container from '../../components/Container';
import metaData from '@/data/metaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${metaData.title} | Blog`,
  description: metaData.description,
  openGraph: {
    siteName: metaData.siteName,
    url: metaData.url,
    type: 'website',
    title: `${metaData.title} | Blog`,
    images: metaData.image,
  },
  twitter: {
    card: 'summary_large_image',
    site: metaData.twitterName,
    title: `${metaData.title} | Blog`,
    description: metaData.description,
    images: metaData.image,
  },
};

export default function BlogPage() {
  const isDev = process.env.NODE_ENV === 'development';

  const drafts = isDev ? allPosts.filter(filterDraftDocuments).sort(documentByDateDesc) : null;

  const posts = allPosts.filter(filterPublishedDocuments).sort(documentByDateDesc);
  console.log(allPosts.map(post => post.status));
  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        {drafts?.map(drafts => (
          <DraftPreview key={drafts._id} draft={drafts} />
        ))}
        {posts.map(post => (
          <BlogPost key={post._id} post={post} />
        ))}
      </div>
    </Container>
  );
}
