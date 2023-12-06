import { TwitterFollowCard } from "./twitter-follow-card";
import "./App.css";

export function App() {
  return (
    <section className="section-twitter">
      <TwitterFollowCard name="Pablo Medialdea Torres" userName="midudev" />
      <TwitterFollowCard name="Pablo Medialdea Torres" userName="pheralb" />
      <TwitterFollowCard name="Pablo Medialdea Torres" userName="elonmusk" />
    </section>
  );
}
