/** @jsx h */
import { h, PageProps } from "-/client_deps.ts";

export default function Greet(props: PageProps) {
  return <div>Welcome to the Edit page for:{props.params.name} this view will be created soon</div>;
}
