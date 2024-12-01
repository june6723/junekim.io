import { Shorts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

type ShortsItemProps = {
  shorts: Shorts;
};

const ShortsItem = (props: ShortsItemProps) => {
  const { date, title, description, _raw } = props.shorts;
  return (
    <Link href={`/shorts/${_raw.flattenedPath}`} passHref>
      <a className={`w-full my-7 hover:-translate-x-1.5`}>
        <div className={`font-medium text-xs text-gray-400`}>{format(parseISO(date), 'LLLL d, yyyy')}</div>
        <div className={`font-extrabold text-2xl mt-2`}>{title}</div>
        <div className={`font-medium text-gray-600 text-xl mt-1`}>{description}</div>
      </a>
    </Link>
  );
};

export default ShortsItem;
