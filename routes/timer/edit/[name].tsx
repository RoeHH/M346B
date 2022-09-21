/** @jsx h */
/** @jsxFrag Fragment */

import { h, PageProps, tw, Fragment } from "-/client_deps.ts";
import SiteHead from "-/components/Head.tsx";
import TimerForm from "-/components/TimerForm.tsx";
import { TimerDataController } from "-/data/TimerDataController.ts";
import BackButton from "-/components/backButton.tsx";
import { FormHandler } from "-/handlers/FormHandler.ts";

export const handler = FormHandler

export default function Edit(props: PageProps) { 
  return (
    <>
      <SiteHead title="Edit" stylesheets={["/css/main.css"]} />
      <div className="body">
        <BackButton />
        <h1 className={tw`text-2xl`}>Edit</h1>
        <TimerForm Timer={props.data.Timer} />
      </div>
    </>
  );
}
