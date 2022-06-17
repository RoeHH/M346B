/** @jsx h */
import { h, useMemo, tw, useState, useEffect } from "../client_deps.ts";

export default function CountDown({ time: intervale }: { time: number[] }) {
  let [j, setJ] = useState(0);
  const [i, setI] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [seconds, setSeconds] = useState(intervale[0]);

  const nextInterval = () => {
    setJ(j + 1);
    setI(i + 1);
    setSeconds(intervale[i]);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
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
        <svg width="400" height="400">
          <g transform="rotate(-90 100 100)">
            <circle
              r="140"
              cx="00"
              cy="200"
              fill="transparent"
              stroke="lightgrey"
              stroke-width="2rem"
              stroke-dasharray="879.6"
              stroke-dashoffset="0"
            ></circle>
            <circle
              r="140"
              cx="00"
              cy="200"
              fill="transparent"
              stroke="black"
              stroke-width="2rem"
              stroke-dasharray="879.69"
              stroke-dashoffset={879.69 - (seconds / intervale[j]) * 879.69}
            ></circle>
          </g>
          <text
            x="50%"
            y="50%"
            dominant-baseline="central"
            text-anchor="middle"
          >
            {seconds || 0}s
          </text>
        </svg>
      </p>
      <div
        class={tw`fixed left-1/2 top-2/3 mt-24 w-32 2xl:left-2/3 2xl:top-1/3`}
      >
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
