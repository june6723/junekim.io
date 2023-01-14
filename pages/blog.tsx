import { allPosts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import { postByDateDesc } from 'util/logic';
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
  const posts = allPosts.sort(postByDateDesc);

  return {
    props: { posts },
  };
};

export default Blog;
