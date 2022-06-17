/** @jsx h */
/** @jsxFrag Fragment */

import { h, tw } from "-/client_deps.ts";

export default function progressCircle() {
  return (
    <div class={tw``}>
      <svg width="400" height="400">
        <g transform="rotate(-90 100 100)">
          <circle
            r="140"
            cx="00"
            cy="200"
            fill="transparent"
            stroke="lightgrey"
            stroke-width="2rem"
            stroke-dasharray="879.6"
            stroke-dashoffset="0"
          ></circle>
          <circle
            r="140"
            cx="00"
            cy="200"
            fill="transparent"
            stroke="black"
            stroke-width="2rem"
            stroke-dasharray="879.69"
            stroke-dashoffset="132"
          ></circle>
        </g>
        <text
          x="50%"
          y="50%"
          dominant-baseline="central"
          text-anchor="middle"
        ></text>
      </svg>
    </div>
  );
}
