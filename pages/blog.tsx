import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { InferGetStaticPropsType } from 'next';
import BlogPost from '../components/BlogPost';
import Container from '../components/Container';

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        {posts.map(post => (
          <BlogPost key={post._id} post={post} />
        ))}
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return {
    props: { posts },
  };
};

export default Blog;
