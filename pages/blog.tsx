import DraftPreview from 'components/DraftPreview';
import { allPosts, Post } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { documentByDateDesc, filterDraftDocuments, filterPublishedDocuments } from 'util/logic';
import BlogPost from '../components/BlogPost';
import Container from '../components/Container';

const Blog = ({ drafts, posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
};

export const getStaticProps: GetStaticProps<{ drafts: Post[] | null; posts: Post[] }> = async () => {
  const isDev = process.env.NODE_ENV === 'development';

  const drafts = allPosts.filter(filterDraftDocuments).sort(documentByDateDesc);
  const posts = allPosts.filter(filterPublishedDocuments).sort(documentByDateDesc);

  return {
    props: { drafts: isDev ? drafts : null, posts },
  };
};

export default Blog;
