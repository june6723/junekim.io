import { Shorts } from 'contentlayer/generated';
import Link from 'next/link';

export interface IRecentShorts {
  recentShorts: Shorts[];
}

const RecentShorts = ({ recentShorts }: IRecentShorts) => {
  return (
    <section className={`mt-10 flex-1`}>
      <h1 className={`text-3xl font-extrabold`}>최근 쇼츠</h1>
      <div className={`flex flex-col`}>
        {recentShorts.map(short => (
          <Link key={short._id} href={`/shorts/${short._raw.flattenedPath}`} passHref>
            <a className="mt-5">
              <div className={`font-medium text-xl`}>{short.title}</div>
              <div className={`font-light`}>{short.description}</div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentShorts;
