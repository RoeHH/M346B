/** @jsx h */
/** @jsxFrag Fragment */

import { h, tw, Head, Fragment } from "-/client_deps.ts";

interface SiteHeadProps {
  title: string;
  stylesheets: string[];
}

export default function SiteHead(props: SiteHeadProps) {
  return (
    <Head>
      <title>{props.title}</title>
      {props.stylesheets.map((sheet) => (
        <link rel="stylesheet" href={sheet} />
      ))}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
