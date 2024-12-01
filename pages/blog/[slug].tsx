import Container from 'components/Container';
import { allPosts, Post } from 'contentlayer/generated';
import { getCustomMeta } from 'data/metaData';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

const BlogPost = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post.body.code);
  const customMeta = getCustomMeta({ title: post.title, description: post.description, date: post.date });

  return (
    <Container customMeta={customMeta}>
      <div className="mt-10 prose dark:prose-invert">
        <h1 className="text-white">{post.title}</h1>
        <MDXComponent />
      </div>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPosts.map(({ _raw }) => ({ params: { slug: _raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ post: Post }> = async context => {
  const { slug } = context.params as IParams;

  const post = allPosts.find(p => p._raw.flattenedPath === slug);

  if (!post) return { notFound: true };
  return {
    props: { post },
  };
};

export default BlogPost;
