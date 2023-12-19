export function Winner({ winner, restart, Square }) {
  if (winner === null) {
    return null;
  }
  const winnerText = winner === false ? "Tie" : "Won";

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">
          {winner && <Square>{winner}</Square>}
          {winner === false && <Square>{"="}</Square>}
        </header>
        <footer>
          <button onClick={restart}>Restart</button>
        </footer>
      </div>
    </section>
  );
}
