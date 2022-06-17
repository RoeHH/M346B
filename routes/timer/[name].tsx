/** @jsx h */
/** @jsxFrag Fragment */

import { h, PageProps, tw, Fragment } from "-/client_deps.ts";
import BackButton from "-/components/backButton.tsx";
import ProgressCircle from "-/components/progressCircle.tsx";
import CountDown from "-/islands/CountDown.tsx";
import SiteHead from "-/components/Head.tsx";
import { TimerDataController } from "-/data/TimerDataController.ts";
import { Handlers } from "-/server_deps.ts";

export const handler: Handlers = {
  GET(req, ctx) {
    const timer = TimerDataController.getTimerByName(
      decodeURI(ctx.params.name)
    );
    if (timer) {
      return ctx.render({ timer });
    } else {
      return Response.redirect(new URL(req.url).origin);
    }
  },
};

export default function Greet(props: PageProps) {
  return (
    <>
      <SiteHead title="Home" stylesheets={["/css/main.css"]} />
      <div class={tw`h-screen w-screen`}>
        <BackButton />
        <div class={tw``}>
          <div id="circle">
            <ProgressCircle />
          </div>
          <div id="countdown">
            <CountDown time={props.data.timer?.intervale || []} />
          </div>
        </div>
      </div>
    </>
  );
}
