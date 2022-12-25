import Head from "next/head";
import Image from "next/image";
import { ReactNode } from "react";
import metaData from "../data/metaData";
import Nav from "./Nav";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className={`w-full flex flex-col items-center p-3`}>
      <Head>
        <title>{metaData.title}</title>
      </Head>
      <header
        className={`w-full max-w-3xl flex flex-row justify-between items-center my-1`}
      >
        <div className={`flex flex-row items-center`}>
          <Image
            src={`/logo.jpeg`}
            alt="logo"
            width={40}
            height={40}
            objectFit="cover"
            className={`rounded-full`}
          />
          <span className={`mx-2 font-extralight text-lg`}>
            {metaData.title}
          </span>
        </div>
        <Nav />
      </header>
      <main className={`w-full max-w-3xl`}>{children}</main>
    </div>
  );
};
export default Container;
