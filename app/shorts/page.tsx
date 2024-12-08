import Container from 'components/Container';
import DraftPreview from 'components/DraftPreview';
import ShortsItem from 'components/ShortsItem';
import { allShorts } from 'contentlayer/generated';
import { documentByDateDesc, filterDraftDocuments, filterPublishedDocuments } from 'util/logic';

export default function ShortsList() {
  const isDev = process.env.NODE_ENV === 'development';

  const drafts = isDev ? allShorts.filter(filterDraftDocuments).sort(documentByDateDesc) : null;
  const shorts = allShorts.filter(filterPublishedDocuments).sort(documentByDateDesc);

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
