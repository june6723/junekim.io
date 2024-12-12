import ClientMDX from '@/components/ClientMdx';
import Container from 'components/Container';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

import metaData from '@/data/metaData';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return allPosts.map(post => ({
    id: post._raw.flattenedPath,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const id = (await params).id;
  const post = allPosts.find(p => p._raw.flattenedPath === id);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | ${metaData.title}`,
    description: post.description,
    openGraph: {
      title: `${post.title} | ${metaData.title}`,
      description: post.description,
      url: `${metaData.url}/blog/${id}`,
      siteName: metaData.siteName,
      type: 'article',
      images: metaData.image,
    },
    twitter: {
      card: 'summary_large_image',
      site: metaData.twitterName,
      title: `${post.title} | ${metaData.title}`,
      description: post.description,
      images: metaData.image,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const post = allPosts.find(p => p._raw.flattenedPath === id);

  if (!post) {
    notFound();
  }

  return (
    <Container>
      <div className="mt-10 prose dark:prose-invert">
        <h1>{post.title}</h1>
        <ClientMDX code={post.body.code} />
      </div>
    </Container>
  );
}
