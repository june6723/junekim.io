import Head from 'next/head';
import Image from 'next/image';
import { ReactNode } from 'react';
import metaData from '../data/metaData';
import Footer from './Footer';
import Nav from './Nav';

interface Props {
  children: ReactNode;
  customMeta?: typeof metaData;
}

const Container = ({ children, customMeta }: Props) => {
  const { title, url, siteName, description, image, twitterName } = { ...metaData, ...customMeta };
  return (
    <div className={`w-full flex flex-col items-center p-3 `}>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={twitterName} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <header className={`w-full max-w-3xl flex flex-row justify-between items-center my-1`}>
        <div className={`flex flex-row items-center`}>
          <Image src={`/logo.jpeg`} alt="logo" width={40} height={40} objectFit="cover" className={`rounded-full`} />
          <span className={`mx-2 font-extralight text-lg`}>{metaData.title}</span>
        </div>
        <Nav />
      </header>
      <main className={`w-full max-w-3xl`}>{children}</main>
      <Footer />
    </div>
  );
};
export default Container;
