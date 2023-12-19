import { Square } from "./square";

export function Board({ board, updateBoard }) {
  return (
    <section className="game">
      {board.map((square, index) => {
        return (
          <Square key={index} updateBoard={updateBoard} index={index}>
            {square}
          </Square>
        );
      })}
    </section>
  );
}
