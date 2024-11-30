import React from 'react';
import Container from 'components/Container';
import { allDocuments, allPosts, Post } from 'contentlayer/generated';
import { getCustomMeta } from 'data/metaData';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function Shorts({ shortsIntro }: InferGetStaticPropsType<typeof getStaticProps>) {
  // shorts 페이지에 들어가는 컨텐츠들은 짧은 형식의 blog post 이다.
  const MDXComponent = useMDXComponent(shortsIntro.body.code);
  const customMeta = getCustomMeta({
    title: shortsIntro.title,
    description: shortsIntro.description,
    date: shortsIntro.date,
  });

  return (
    <Container customMeta={customMeta}>
      <div className="mt-10 prose dark:prose-invert">
        <h1 className="text-white">{shortsIntro.title}</h1>
        <MDXComponent />
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps<{ shortsIntro: Post }> = async () => {
  const shortsIntro = allPosts.filter(post => post.title === 'Shorts 소개')[0];

  console.log(allDocuments);
  if (!shortsIntro) return { notFound: true };
  return {
    props: { shortsIntro },
  };
};
