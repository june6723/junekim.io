import { Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
type BlogPostProps = {
  post: Post;
};

const BlogPost = (props: BlogPostProps) => {
  const { date, title, description, _raw } = props.post;
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

export default BlogPost;
