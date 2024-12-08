import type { Metadata as NextMetadata } from 'next';
import metaData from '@/data/metaData';
import Container from '@/components/Container';
import RecentPosts from '@/components/RecentPosts';
import RecentShorts from '@/components/RecentShorts';
import { filterPublishedDocuments, documentByDateDesc } from '@/util/logic';
import { allPosts, allShorts } from 'contentlayer/generated';
import Image from 'next/image';

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

// 서버 컴포넌트로 변환
export default async function Page() {
  // 데이터 fetch 로직을 컴포넌트 내부로 이동
  const recentPosts = allPosts.filter(filterPublishedDocuments).sort(documentByDateDesc).slice(0, 5);

  const recentShorts = allShorts.filter(filterPublishedDocuments).sort(documentByDateDesc).slice(0, 5);

  return (
    <Container>
      <div className="my-5 w-full">
        <div className="relative">
          <Image src="/home.jpg" alt="대표 이미지" width={768} height={432} className="rounded-3xl object-cover" />
          <span className="absolute top-12 font-extrabold italic text-white text-5xl md:text-9xl text flex justify-center w-full drop-shadow-lg">
            {metaData.title}
          </span>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <RecentPosts recentPosts={recentPosts} />
          <RecentShorts recentShorts={recentShorts} />
        </div>
      </div>
    </Container>
  );
}
