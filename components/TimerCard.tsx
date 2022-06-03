/** @jsx h */
/** @jsxFrag Fragment */

import { h, tw, Head, Fragment } from "-/client_deps.ts";
import Timer from "-/data/Timer.ts"

export default function TimerCard(props: Timer) {
    const given_seconds = props.intervale.reduce((a, b) => a + b);
    const hours = Math.floor(given_seconds / 3600);
    const minutes = Math.floor((given_seconds - (hours * 3600)) / 60);
    const seconds = given_seconds - (hours * 3600) - (minutes * 60);
    return (
        <div class={tw`w-full bg-gray-900 rounded-lg p-12 flex flex-col justify-center items-center`}>
          <div class={tw`mb-8`}>
            <h1 class={tw`text-white font-bold mb-2`}>{props.name}</h1>
          </div>
          <div class={tw`text-center`}>
            <p class={tw`text-white font-bold mb-2`}>{hours}h {minutes}min {seconds}sec</p>
            <p class={tw`text-base text-gray-400 font-normal`}>________________________________________</p>
          </div>
        </div>

    )
}
   /* return (
        <div>            
            <h1>{props.name}</h1>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="60" width="60" viewBox="0 0 512 512" xmlnsXlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512`}>
                <g>
                    <path d="m256,501c-129.6,0-235-102.2-235-227.8 0-87.8 50.6-166.3 132.1-204.9 10.2-4.8 22.4-0.5 27.2,9.7 4.8,10.2 0.5,22.4-9.7,27.2-67.1,31.8-108.7,96.1-108.7,168-7.10543e-15,103.1 87.1,187 194.1,187 107,0 194.1-83.9 194.1-187 0-72.4-44-138.9-112.2-169.5-10.3-4.6-14.9-16.7-10.3-27 4.6-10.3 16.7-14.9 27-10.2 82.9,37.1 136.4,118.3 136.4,206.7 0,125.6-105.4,227.8-235,227.8z"/>
                </g>
            </svg>
            <p>{props.intervale.reduce((a, b) => a + b)}</p>
        </div>
    )
}*/