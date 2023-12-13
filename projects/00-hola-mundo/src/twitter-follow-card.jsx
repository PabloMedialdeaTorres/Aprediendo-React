import { useState } from "react";

export function TwitterFollowCard({
  userName = "unknown", // default value falls nothing will be pass to the function
  children,
  initialIsFollowing,
}) {
  // children cuando pasamos la prop asi
  //  <TwitterFollowCard userName="midudev" isFollowing>
  //    Pablo Medialdea Torres
  //  </TwitterFollowCard>
  //
  // si le pasamos la prop a traves de por ejempl name entonces asi
  // <TwitterFollowCard
  //   name="Pablo Medialdea Torres"
  //   userName="pheralb"
  //   isFollowing
  // />

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const twitterImage = `https://unavatar.io/${userName}`;

  const text = isFollowing ? "Siguiendo" : "Seguir";

  // algo asi como ngClass en Angular
  const buttonClassName = isFollowing
    ? "follow-button is-following"
    : "follow-button";

  // toggle para cambiar isFollowing
  const handelClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="article-grid">
      <header className="header-article">
        <img className="avatar" src={twitterImage} />
        <div className="name">
          <strong> {children} </strong>
          <span className="tag">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handelClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
