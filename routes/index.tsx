/** @jsx h */
/** @jsxFrag Fragment */

import { h, tw, Fragment } from "../client_deps.ts";
import SiteHead from "-/components/Head.tsx";
import TimerCard from "-/components/TimerCard.tsx";

import Timer from "-/data/interfaces/ITimer.ts";
import { TimerDataController } from "-/data/TimerDataController.ts";

const Timers: Timer[] = TimerDataController.getAllTimers();

export default function Home() {
  return (
    <>
      <SiteHead title="Home" stylesheets={[]} />
      <img src="favicon.ico" class={tw`my-10 mx-auto h-40 w-40`} />
      <div
        class={tw`mx-10 md:mx-20 lg:mx-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6`}
      >
        {Timers.map((t) => (
          <TimerCard name={t.name} intervale={t.intervale} />
        ))}
      </div>
    </>
  );
}
