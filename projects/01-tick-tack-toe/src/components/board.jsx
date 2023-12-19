import { Square } from "./square";

export function Board({ board, updateBoard, resetFadeIn }) {
  return (
    <section className="game">
      {board.map((square, index) => {
        return (
          <Square
            key={index}
            updateBoard={updateBoard}
            index={index}
            resetFadeIn={resetFadeIn}
          >
            {square}
          </Square>
        );
      })}
    </section>
  );
}
