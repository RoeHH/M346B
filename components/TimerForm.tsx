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
        placeholder="Timer Name"
        className={tw`h-8 w-48 p-3 m-3`}
        name="name"
        pattern="^.+$"
        value={props?.Timer?.name}
      >
      </input>
      <input
        type="text"
        placeholder="Timer iterationen [1,2,3]"
        className={tw`h-8 w-48 p-3 m-3`}
        name="interval"
        pattern="^[0-9\,]+$"
        value={props?.Timer?.intervale.toString()}
      >
      </input>
      <button type="submit">Submit</button>
    </form>
  );
}
