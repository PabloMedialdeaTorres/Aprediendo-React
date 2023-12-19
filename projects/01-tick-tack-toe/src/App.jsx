import { useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "./components/square";
import { TURNS } from "./constants/constants";
import { checkWinner } from "./logic/check-winner";
import { Winner } from "./components/winner";
import { checkEndGame } from "./logic/check-end-game";
import { Board } from "./components/board";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  // null es que no hay ganador, false es que hay empate
  const [winner, setWinner] = useState(null);

  const restart = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  const updateBoard = (index) => {
    // si ya tiene algo no hagas nada
    if (board[index] || winner) {
      return;
    }
    //actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // cambia el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // revisar si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // tie
    }
  };

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={restart}>Restart</button>
      <Board board={board} updateBoard={updateBoard}></Board>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O} </Square>
      </section>
      <Winner winner={winner} restart={restart} Square={Square}></Winner>
    </main>
  );
}

export default App;
