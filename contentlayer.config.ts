import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`,
  fields: {
    status: {
      type: 'enum',
      options: ['draft', 'published'],
      description: 'The status of the shorts',
      required: true,
    },
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    description: { type: 'string', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: post => `/posts/${post._raw.flattenedPath}`,
    },
  },
}));

export const Shorts = defineDocumentType(() => ({
  name: 'Shorts',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`,
  fields: {
    status: {
      type: 'enum',
      options: ['draft', 'published'],
      description: 'The status of the shorts',
      required: true,
    },
    title: {
      type: 'string',
      description: 'The title of the shorts',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the shorts',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: post => `/shorts/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post, Shorts],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism, rehypeSlug, rehypeAutolinkHeadings],
  },
});
