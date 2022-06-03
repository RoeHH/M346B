/** @jsx h */
/** @jsxFrag Fragment */

import { h, tw, Head, Fragment } from "-/client_deps.ts";
import Timer from "-/data/Timer.ts"

export default function TimerCard(props: Timer) {
    const editLink = "/timer/edit/" + props.name
    const startLink =  "/timer/" + props.name
    const given_seconds = props.intervale.reduce((a, b) => a + b);
    const hours = Math.floor(given_seconds / 3600);
    const minutes = Math.floor((given_seconds - (hours * 3600)) / 60);
    const seconds = given_seconds - (hours * 3600) - (minutes * 60);
    return (
      <div class={tw`w-full bg-white rounded-lg flex flex-col justify-center items-center border-solid border-black border-8`}>
        <div class={tw`pt-10`}>
          <div class={tw`mb-8`}>
            <h1 class={tw`text-black font-bold mb-2 text-center`}>{props.name}</h1>
          </div>
          <p class={tw`text-black font-bold mb-2 text-center`}>{hours}h {minutes}min {seconds}sec</p>  
        </div>
          <div class={tw`flex flex-row content-evenly	bottom-0 relative bg-black text-white`}>
          <button class={tw`bg-black text-white h-8 m-3`}><a href={editLink}>Edit</a></button>
          <button class={tw`bg-black text-white h-8 m-3`}><a href={startLink}>Start</a></button>
        </div>   
      </div>
    )
}