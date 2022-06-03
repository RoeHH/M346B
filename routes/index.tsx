/** @jsx h */
/** @jsxFrag Fragment */

import { h, tw, Head, Fragment } from "../client_deps.ts";
import Counter from "../islands/Counter.tsx";
import SiteHead from "-/components/Head.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>To the Moon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        class={tw`bg-gradient-to-t from-gray-900 to-gray-200 h-screen h-screen`}
      >
        <p>
          Welcome to `fresh`. Try update this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
