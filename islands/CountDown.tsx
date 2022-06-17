/** @jsx h */
import { h, useMemo, tw, useState, useEffect } from "../client_deps.ts";

export default function CountDown({ time: intervale }: { time: number[] }) {
  const [i, setI] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [seconds, setSeconds] = useState(intervale[0]);

  const nextInterval = () => {
    setI(i + 1);
    setSeconds(intervale[i]);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      console.log(seconds);
      if (i === intervale.length + 1) {
        clearInterval(timerId);
      } else {
        if (!isPaused) {
          if (seconds > 1) {
            setSeconds(seconds - 1);
          } else {
            nextInterval();
          }
        }
      }
    }, 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div>
      <p class={tw`text-2xl`} id="countdown">
        {seconds || 0}s
      </p>
      <div class={tw`fixed left-1/2 top-2/3 mt-24 w-32 lg:left-2/3 lg:top-1/3`}>
        <p class={tw`text-xl`}>Next Interval:</p>
        <p>{intervale[i] ? intervale[i] + "s" : "Done!"}</p>
      </div>
      <div class={tw`flex object-right-bottom fixed right-0 bottom-0`}>
        <button
          onClick={() => setIsPaused(!isPaused)}
          class={tw`bg-black text-white w-64 h-16 m-3`}
        >
          Pause
        </button>
        <button
          onClick={nextInterval}
          class={tw`bg-black text-white w-64 h-16 m-3`}
        >
          Skip
        </button>
      </div>
    </div>
  );
}
