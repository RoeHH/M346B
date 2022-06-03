/** @jsx h */
/** @jsxFrag Fragment */

import { h, tw, Head, Fragment } from "-/client_deps.ts";

interface SiteHeadProps {
  title: string;
}

export default function SiteHead(props: SiteHeadProps) {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
