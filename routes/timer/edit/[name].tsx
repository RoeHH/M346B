/** @jsx h */
/** @jsxFrag Fragment */

import { h, PageProps, tw, Fragment } from "-/client_deps.ts";
import { Handlers } from "-/server_deps.ts";
import SiteHead from "-/components/Head.tsx";
import { TimerDataController } from "-/data/TimerDataController.ts";
import Timer from "-/data/interfaces/ITimer.ts";

interface Data {
  queryName: string;
  queryInterval: string;
  success: boolean;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const queryName = url.searchParams.get("name") || "";
    const queryInterval = url.searchParams.get("interval") || "";
    const interval = queryInterval.split(",").map(function (item) {
      return Number(item.trim());
    });
    const editedTimer: Timer = {
      name: queryName,
      intervale: interval,
    };
    TimerDataController.editTimer(ctx.params.name, editedTimer);
    return ctx.render({ queryName, queryInterval, success: true });
  },
};

export default function Greet(props: PageProps) {
  return (
    <>
      <SiteHead title="Edit" stylesheets={["/css/main.css"]} />
      <div className="body">
        <h1 className={tw`text-2xl`}>Edit</h1>
        <form className={tw`flex flex-col`}>
          <input
            type="text"
            placeholder="Timer 1"
            className={tw`h-8 w-48 p-3 m-3`}
            name="name"
          ></input>
          <input
            type="text"
            placeholder="Timer iterationen"
            className={tw`h-8 w-48 p-3 m-3`}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
