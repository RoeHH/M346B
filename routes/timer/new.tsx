/** @jsx h */
/** @jsxFrag Fragment */

import { h, PageProps, Fragment, tw } from "-/client_deps.ts";
import BackButton from "-/components/backButton.tsx";
import SiteHead from "-/components/Head.tsx";
import TimerForm from "-/components/TimerForm.tsx";
import { FormHandler } from "-/handlers/FormHandler.ts";

export const handler = FormHandler

export default function NewTimmer() {
  return (  
  <>
      <SiteHead title="Edit" stylesheets={["/css/main.css"]} />
      <div className="body">
        <BackButton />
        <h1 className={tw`text-2xl`}>New</h1>
        <TimerForm Timer={undefined}/>
      </div>
    </>
  );
}
