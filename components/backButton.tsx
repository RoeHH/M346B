/** @jsx h */
/** @jsxFrag Fragment */

import { h, tw } from "-/client_deps.ts";

export default function BackButton() {
  return (
    <div class={tw`h-40 w-40`}>
      <a href="../" class={tw`fixed left-0 top-0 h-16 w-16 mt-6`}>
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 477.175 477.175"
          style="enable-background:new 0 0 477.175 477.175;"
          xmlSpace="preserve"
        >
          <g>
            <path
              d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
            />
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </a>
    </div>
  );
}
