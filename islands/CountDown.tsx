/** @jsx h */
import { h, useMemo, tw, useState, useEffect } from "-/client_deps.ts";

export default function CountDown() {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(timerId);
      }
    }, 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div>
      <p class={tw`text-2xl`} id="countdown">
        {seconds + "s"}
      </p>
    </div>
  );
}
