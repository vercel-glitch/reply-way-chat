import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/reply.png" />
        <link rel="shortcut icon" href="/reply.png" />
        <link rel="apple-touch-icon" href="/reply.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
