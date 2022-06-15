/** @jsx h */
/** @jsxFrag Fragment */

import { h, PageProps, Fragment, tw } from "-/client_deps.ts";
import BackButton from "-/components/backButton.tsx";
import SiteHead from "-/components/Head.tsx";
import TimerForm from "-/components/TimerForm.tsx";

export default function Greet() {
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
