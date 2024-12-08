import ClientMDX from '@/components/ClientMdx';
import metaData from '@/data/metaData';
import Container from 'components/Container';
import { allShorts } from 'contentlayer/generated';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return allShorts.map(shorts => ({
    id: shorts._raw.flattenedPath,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const id = (await params).id;
  const shorts = allShorts.find(s => s._raw.flattenedPath === id);

  if (!shorts) {
    return {
      title: 'Shorts Not Found',
    };
  }

  return {
    title: `${shorts.title} | ${metaData.title}`,
    description: shorts.description,
    openGraph: {
      title: `${shorts.title} | ${metaData.title}`,
      description: shorts.description,
      url: `${metaData.url}/shorts/${id}`,
      siteName: metaData.siteName,
      type: 'article',
      images: metaData.image,
    },
    twitter: {
      card: 'summary_large_image',
      site: metaData.twitterName,
      title: `${shorts.title} | ${metaData.title}`,
      description: shorts.description,
      images: metaData.image,
    },
  };
}

export default async function ShortsDetail({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const shorts = allShorts.find(s => s._raw.flattenedPath === id);

  if (!shorts) {
    notFound();
  }

  return (
    <Container>
      <div className="mt-10 prose dark:prose-invert">
        <h1 className="text-white">{shorts.title}</h1>
        <ClientMDX code={shorts.body.code} />
      </div>
    </Container>
  );
}
