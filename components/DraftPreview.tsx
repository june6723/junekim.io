import { DocumentTypes } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { getPathByType } from 'util/logic';

type DraftPreviewProps = {
  draft: DocumentTypes;
};

const DraftPreview = (props: DraftPreviewProps) => {
  const { date, title, description, _raw } = props.draft;
  return (
    <Link href={`/${getPathByType(props.draft)}/${_raw.flattenedPath}`} passHref>
      <a className={`w-full my-7 hover:-translate-x-1.5`}>
        <div className={`flex items-center gap-2`}>
          <div className={`font-medium text-xs text-gray-400`}>{format(parseISO(date), 'LLLL d, yyyy')}</div>
          <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold `}>
            Draft
          </span>
        </div>
        <div className={`font-extrabold text-2xl mt-2`}>{title}</div>
        <div className={`font-medium text-gray-600 text-xl mt-1`}>{description}</div>
      </a>
    </Link>
  );
};

export default DraftPreview;
