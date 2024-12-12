import Image from 'next/image';
import { PropsWithChildren } from 'react';
import metaData from '../data/metaData';
import Footer from './Footer';
import Nav from './Nav';

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className={`w-full min-h-dvh flex flex-col items-center p-3 `}>
      <header className={`w-full max-w-3xl flex flex-row justify-between items-center my-1`}>
        <div className={`flex flex-row items-center`}>
          <div className="relative w-[36px] h-[36px]">
            <Image src={`/logo.jpeg`} alt="logo" fill className={`rounded-full object-cover`} sizes="36px" />
          </div>
          <span className={`mx-2`}>{metaData.title}</span>
        </div>
        <Nav />
      </header>
      <main className={`w-full max-w-3xl flex-1`}>{children}</main>
      <Footer />
    </div>
  );
};
export default Container;
