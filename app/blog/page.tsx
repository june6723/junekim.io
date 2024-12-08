import DraftPreview from 'components/DraftPreview';
import { allPosts } from 'contentlayer/generated';
import { documentByDateDesc, filterDraftDocuments, filterPublishedDocuments } from 'util/logic';
import BlogPost from '../../components/BlogPost';
import Container from '../../components/Container';

export default function BlogPage() {
  const isDev = process.env.NODE_ENV === 'development';

  const drafts = isDev ? allPosts.filter(filterDraftDocuments).sort(documentByDateDesc) : null;
  const posts = allPosts.filter(filterPublishedDocuments).sort(documentByDateDesc);

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
}
