/** @jsx h */
/** @jsxFrag Fragment */

import { h, tw, Fragment } from "../client_deps.ts";
import SiteHead from "-/components/Head.tsx";

export default function Home() {
  return (
    <>
      <SiteHead title="Home" />
      <div
        class={tw`bg-gradient-to-t from-gray-900 to-gray-200 h-screen h-screen`}
      >
        <p>
          Welcome to `fresh`. Try update this message in the ./routes/index.tsx
          file, and refresh.
        </p>
      </div>
    </>
  );
}
