export function TwitterFollowCard({ name, userName }) {
  const twitterImage = `https://unavatar.io/${userName}`;

  return (
    <article className="article-grid">
      <header className="header-article">
        <img className="avatar" src={twitterImage} />
        <div className="name">
          <strong> {name} </strong>
          <span className="tag">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className="follow-button">seguir</button>
      </aside>
    </article>
  );
}
