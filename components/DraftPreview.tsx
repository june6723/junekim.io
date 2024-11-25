import { Draft } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
type DraftPreviewProps = {
  draft: Draft;
};

const DraftPreview = (props: DraftPreviewProps) => {
  const { date, title, description, _raw } = props.draft;
  return (
    <Link href={`/blog/${_raw.flattenedPath}`} passHref>
      <a className={`w-full my-7 hover:-translate-x-1.5`}>
        <div className={`font-medium text-xs text-gray-400`}>{format(parseISO(date), 'LLLL d, yyyy')}</div>
        <div className={`font-extrabold text-2xl mt-2`}>{title}</div>
        <div className={`font-medium text-gray-600 text-xl mt-1`}>{description}</div>
      </a>
    </Link>
  );
};

export default DraftPreview;
