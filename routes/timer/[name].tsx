/** @jsx h */
/** @jsxFrag Fragment */

import {
  h,
  PageProps,
  tw,
  useState,
  useEffect,
  Fragment,
} from "-/client_deps.ts";
import BackButton from "-/components/backButton.tsx";
import ProgressCircle from "-/components/progressCircle.tsx";
import CountDown from "-/islands/CountDown.tsx";
import SiteHead from "-/components/Head.tsx";

export default function Greet(props: PageProps) {
  return (
    <>
      <SiteHead title="Home" stylesheets={["/css/main.css"]} />
      <div class={tw`h-screen w-screen`}>
        <BackButton />
        <div class={tw`flex justify-center items-center`}>
          <ProgressCircle />
          <CountDown />
        </div>
        <div class={tw`fixed left-2/3 top-1/3 mt-24 w-32`}>
          <p class={tw`text-xl`}>Next Interval:</p>
          <p>5s</p>
        </div>
        <div class={tw`flex object-right-bottom fixed right-0 bottom-0`}>
          <button class={tw`bg-black text-white w-64 h-16 m-3`}>Pause</button>
          <button class={tw`bg-black text-white w-64 h-16 m-3`}>Skip</button>
        </div>
      </div>
    </>
  );
}
