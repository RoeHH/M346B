/** @jsx h */
/** @jsxFrag Fragment */

import { h, PageProps, tw, Fragment } from "-/client_deps.ts";
import { Handlers } from "-/server_deps.ts";
import SiteHead from "-/components/Head.tsx";
import TimerForm from "-/components/TimerForm.tsx";
import { TimerDataController } from "-/data/TimerDataController.ts";
import Timer from "-/data/interfaces/ITimer.ts";
import BackButton from "-/components/backButton.tsx";

interface Data {
  queryName: string;
  queryInterval: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const queryName = url.searchParams.get("name") || "";
    const queryInterval = url.searchParams.get("interval") || "";
    if(queryName !== "" && /^[0-9\,]+$/.test(queryInterval)) {
      const interval = queryInterval.split(",").map(item => parseInt(item.trim())).filter(i => i > 0);
      const editedTimer: Timer = {
        name: decodeURI(queryName),
        intervale: interval,
      };
      console.log(editedTimer);
      TimerDataController.editTimer(decodeURI(ctx.params.name), editedTimer);     
      return Response.redirect("http://" + new URL(req.url).host);
    }else{
      return ctx.render({ queryName, queryInterval});
    }
  },
};

export default function Edit(props: PageProps) {
  console.log(decodeURI(props.params.name));
  
  const Timer = TimerDataController.getTimerByName(decodeURI(props.params.name))
  return (
    <>
      <SiteHead title="Edit" stylesheets={["/css/main.css"]} />
      <div className="body">
        <BackButton />
        <h1 className={tw`text-2xl`}>Edit</h1>
        <TimerForm Timer={Timer} />
      </div>
    </>
  );
}
