/** @jsx h */
import { h, PageProps, tw } from "-/client_deps.ts";
import BackButton from "-/components/backButton.tsx";
import ProgressCircle from "-/components/progressCircle.tsx";

export default function Greet(props: PageProps) {
  return (
    <div class={tw`h-screen w-screen`}>
      <BackButton />
      <ProgressCircle />
      <div class={tw`flex object-right-bottom fixed right-0 bottom-0`}>
        <button class={tw`bg-black text-white w-64 h-16 m-3`}>Pause</button>
        <button class={tw`bg-black text-white w-64 h-16 m-3`}>Skip</button>
      </div>
    </div>
  );
}
