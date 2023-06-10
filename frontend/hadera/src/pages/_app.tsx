import { AppProps } from "next/app";
import Head from 'next/head';
import "../globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
