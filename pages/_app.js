import "../src/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Replyway</title>
        <meta name="description" content="Get ready for the future of work with Replyway" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/reply.png" />
        <link rel="shortcut icon" href="/reply.png" />
        <link rel="apple-touch-icon" href="/reply.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
