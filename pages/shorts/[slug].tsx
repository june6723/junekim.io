import Container from 'components/Container';
import { allShorts, Shorts } from 'contentlayer/generated';
import { getCustomMeta } from 'data/metaData';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer2/hooks';

export default function ShortsDetail({ shorts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXComponent = useMDXComponent(shorts.body.code);
  const customMeta = getCustomMeta({
    title: shorts.title,
    description: shorts.description,
    date: shorts.date,
  });

  return (
    <Container customMeta={customMeta}>
      <div className="mt-10 prose dark:prose-invert">
        <h1 className="text-white">{shorts.title}</h1>
        <MDXComponent />
      </div>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allShorts.map(({ _raw }) => ({ params: { slug: _raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ shorts: Shorts }> = async context => {
  const { slug } = context.params as IParams;
  const shorts = allShorts.find(s => s._raw.flattenedPath === slug);

  if (!shorts) return { notFound: true };
  return {
    props: { shorts },
  };
};
