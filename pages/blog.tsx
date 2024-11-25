import { allPosts, allDocuments } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import { documentByDateDesc } from 'util/logic';
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
  const documents = allDocuments.sort(documentByDateDesc);
  const posts = allPosts.sort(documentByDateDesc);

  return {
    props: { posts },
  };
};

export default Blog;
