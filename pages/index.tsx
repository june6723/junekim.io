import RecentShorts from 'components/RecentShorts';
import { allPosts, allShorts, Post, Shorts } from 'contentlayer/generated';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { documentByDateDesc, filterPublishedDocuments } from 'util/logic';
import Container from '../components/Container';
import RecentPosts from '../components/RecentPosts';
import metaData from '../data/metaData';

type HomeProps = { recentPosts: Post[]; recentShorts: Shorts[] };

const Home = ({ recentPosts, recentShorts }: HomeProps) => {
  return (
    <Container>
      <div className={`my-5 w-full`}>
        <div className={`relative`}>
          <Image src={`/home.jpg`} alt="대표 이미지" width={768} height={432} className={`rounded-3xl object-cover`} />
          <span
            className={`absolute top-12 font-extrabold italic text-white text-5xl md:text-9xl text flex justify-center w-full drop-shadow-lg`}
          >
            {metaData.title}
          </span>
        </div>
        <div className={`flex flex-col gap-4 sm:flex-row`}>
          <RecentPosts recentPosts={recentPosts} />
          <RecentShorts recentShorts={recentShorts} />
        </div>
      </div>
    </Container>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const recentPosts = allPosts.filter(filterPublishedDocuments).slice(0, 5).sort(documentByDateDesc);

  const recentShorts = allShorts.filter(filterPublishedDocuments).slice(0, 5).sort(documentByDateDesc);
  return { props: { recentPosts, recentShorts } };
};

export default Home;
