import Head from 'next/head';
import GlobalStyles from 'styles/global';

import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Travel App</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple starter to work with TypeScript, React, NextJS and Styled Components  "
        />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNProgress
        color="#F231A5"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
