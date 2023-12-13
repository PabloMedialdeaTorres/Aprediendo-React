import { TwitterFollowCard } from "./twitter-follow-card";
import "./App.css";
import { useState } from "react";

export function App() {
  // if there is now username it will appear unknown bacause you can set
  // the props in case anything is given
  // ejemplo:
  // export function TwitterFollowCard({userName = "unknown", isFollowing children,})
  return (
    <section className="section-twitter">
      <TwitterFollowCard userName="midudev" initialIsFollowing={true}>
        Pablo Medialdea Torres
      </TwitterFollowCard>
      <TwitterFollowCard userName="elonmusk">Elon Musk</TwitterFollowCard>
      <TwitterFollowCard>Not Found</TwitterFollowCard>
    </section>
  );
}
