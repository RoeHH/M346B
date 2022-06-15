/** @jsx h */
/** @jsxFrag Fragment */

import { h, tw, Fragment } from "../client_deps.ts";
import SiteHead from "-/components/Head.tsx";
import TimerCard from "-/components/TimerCard.tsx";

import Timer from "-/data/interfaces/ITimer.ts";
import { TimerDataController } from "-/data/TimerDataController.ts";

export default function Home() {
  const Timers: Timer[] = TimerDataController.getAllTimers();
  return (
    <>
      <SiteHead title="Home" stylesheets={[]} />
      <img src="favicon.ico" class={tw`my-10 mx-auto h-40 w-40`} />
      <div
        class={tw`mx-10 md:mx-20 lg:mx-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6`}
      >
        <div class={tw`w-full bg-white rounded-lg flex flex-col justify-center items-center border-solid border-black border-8`}>
          <a href="/timer/new" class={tw`text-2xl`}>Crate new Timer</a>
        </div>
        {Timers.map((t) => (
          <TimerCard name={t.name} intervale={t.intervale} />
        ))}
      </div>
    </>
  );
}
