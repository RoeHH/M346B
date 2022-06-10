/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h, Head, tw } from "-/client_deps.ts";
import Timer from "-/data/interfaces/ITimer.ts";

interface TimerFormProps {
  Timer: Timer | undefined;
}

export default function TimerForm(props: TimerFormProps | undefined) {
  return (
    <form className={tw`flex flex-col`}>
      <input
        type="text"
        placeholder="Timer 1"
        className={tw`h-8 w-48 p-3 m-3`}
        name="name"
        value={props?.Timer?.name}
      >
      </input>
      <input
        type="text"
        placeholder="Timer iterationen"
        className={tw`h-8 w-48 p-3 m-3`}
        name="interval"
        value={props?.Timer?.intervale.toLocaleString()}
      >
      </input>
      <button type="submit">Submit</button>
    </form>
  );
}
