import RecentShorts from 'components/RecentShorts';
import { allPosts, Post } from 'contentlayer/generated';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { documentByDateDesc } from 'util/logic';
import Container from '../components/Container';
import RecentPosts from '../components/RecentPosts';
import metaData from '../data/metaData';

type HomeProps = { recentPosts: Post[]; recentShorts: Post[] };

const Home = ({ recentPosts, recentShorts }: HomeProps) => {
  return (
    <Container>
      <div className={`my-5 w-full`}>
        <div className={`relative`}>
          <Image
            src={`/home.jpg`}
            alt="대표 이미지"
            width={`100%`}
            height={45}
            layout={`responsive`}
            objectFit="cover"
            className={`rounded-3xl`}
          />
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
  const recentPosts = allPosts
    // TODO: 추후 쇼츠 소개 글 추가 시 수정
    .filter(post => post.title !== 'Shorts 소개')
    .slice(0, 5)
    .sort(documentByDateDesc);

  // TODO: 추후 쇼츠 소개 글 추가 시 수정
  const recentShorts = allPosts
    .filter(post => post.title === 'Shorts 소개')
    .slice(0, 5)
    .sort(documentByDateDesc);
  return { props: { recentPosts, recentShorts } };
};

export default Home;
