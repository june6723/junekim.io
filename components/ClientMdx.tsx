'use client';

import { useMDXComponent } from 'next-contentlayer2/hooks';

export default function ClientMDX({ code }: { code: string }) {
  const MDXComponent = useMDXComponent(code);
  return <MDXComponent />;
}
