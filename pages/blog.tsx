import DraftPreview from 'components/DraftPreview';
import { allPosts, allDrafts } from 'contentlayer/generated';
import { InferGetStaticPropsType } from 'next';
import { documentByDateDesc } from 'util/logic';
import BlogPost from '../components/BlogPost';
import Container from '../components/Container';

const Blog = ({ drafts, posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const isDev = process.env.NODE_ENV === 'development';
  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        {isDev && drafts.map(drafts => <DraftPreview key={drafts._id} draft={drafts} />)}
        {posts.map(post => (
          <BlogPost key={post._id} post={post} />
        ))}
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const drafts = allDrafts.sort(documentByDateDesc);
  const posts = allPosts.sort(documentByDateDesc);

  return {
    props: { drafts, posts },
  };
};

export default Blog;
