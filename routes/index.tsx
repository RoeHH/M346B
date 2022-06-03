/** @jsx h */
/** @jsxFrag Fragment */

import { h, tw, Fragment } from "../client_deps.ts";
import Counter from "../islands/Counter.tsx";
import SiteHead from "-/components/Head.tsx";

export default function Home() {
  return (
    <>
      <SiteHead title="Home" />
      <div  class={tw``}>
        <p>
          Welcome to `fresh`. Try update this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
