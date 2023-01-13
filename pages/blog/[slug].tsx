import Container from 'components/Container';
import { allPosts } from 'contentlayer/generated';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post.body.code);
  return (
    <Container>
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;
  const post = allPosts.find(p => p._raw.flattenedPath === slug);
  return {
    props: { post },
  };
};

export default Post;
