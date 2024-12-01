import Container from 'components/Container';
import DraftPreview from 'components/DraftPreview';
import ShortsItem from 'components/ShortsItem';
import { allShorts, Shorts } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { documentByDateDesc, filterDraftDocuments, filterPublishedDocuments } from 'util/logic';

export default function ShortsList({ drafts, shorts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        {drafts?.map(drafts => (
          <DraftPreview key={drafts._id} draft={drafts} />
        ))}
        {shorts.map(shorts => (
          <ShortsItem key={shorts._id} shorts={shorts} />
        ))}
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps<{ drafts: Shorts[] | null; shorts: Shorts[] }> = async () => {
  const isDev = process.env.NODE_ENV === 'development';

  const drafts = allShorts.filter(filterDraftDocuments).sort(documentByDateDesc);
  const shorts = allShorts.filter(filterPublishedDocuments).sort(documentByDateDesc);

  return {
    props: { drafts: isDev ? drafts : null, shorts },
  };
};
