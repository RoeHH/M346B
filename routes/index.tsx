/** @jsx h */
/** @jsxFrag Fragment */

import { h, tw, Fragment } from "../client_deps.ts";
import SiteHead from "-/components/Head.tsx";
import TimerCard from "-/components/TimerCard.tsx";

import TimerDataController from "-/data/TimerDataController.ts";
import Timer from "-/data/Timer.ts";

const Timers: Timer[] = [
  {
    name: "Abs Workout",
    intervale: [1, 1, 34, 2314, 3],
  },
  {
    name: "Abs Workout2",
    intervale: [1, 1, 34, 2314, 344],
  },
  {
    name: "Abs Workout3",
    intervale: [1, 31, 34, 2314, 3, 99999999999999999999, 1],
  },
  {
    name: "Abs Workout4",
    intervale: [1, 1, 32344, 2314, 3],
  },
  {
    name: "Abs Workout4",
    intervale: [1, 1, 32344, 2314, 3],
  },
  {
    name: "Abs Workout4",
    intervale: [1, 1, 32344, 2314, 3],
  },
  {
    name: "Abs Workout4",
    intervale: [1, 1, 32344, 2314, 3],
  },
  {
    name: "Abs Workout4",
    intervale: [1, 1, 32344, 2314, 3],
  },
  {
    name: "Abs Workout4",
    intervale: [1, 1, 32344, 2314, 3],
  },
  {
    name: "Abs Workout4",
    intervale: [1, 1, 32344, 2314, 3],
  },
  {
    name: "Abs Workout4",
    intervale: [1, 1, 32344, 2314, 3],
  },
  {
    name: "Abs Workout4",
    intervale: [1, 1, 32344, 2314, 3],
  },
  {
    name: "Abs Workout4",
    intervale: [1, 1, 32344, 2314, 3],
  },
  {
    name: "Abs Workout4",
    intervale: [1, 1, 32344, 2314, 3],
  },
  {
    name: "Abs Workout4",
    intervale: [1, 1, 32344, 2314, 3],
  },
  {
    name: "Abs Workout4",
    intervale: [1, 1, 32344, 2314, 3],
  },
];

export default function Home() {
  const inter = [1, 3, 324, 234, 5345, 12];
  const TimerCards: any[] = [];
  for (const t of Timers) {
    TimerCards.push(<TimerCard name={t.name} intervale={t.intervale} />);
  }
  return (
    <>
      <SiteHead title="Home" stylesheets={[]} />
      <img src="favicon.ico" class={tw`my-10 mx-auto h-40 w-40`} />
      <div
        class={tw`mx-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6`}
      >
        {TimerCards}
      </div>
    </>
  );
}
