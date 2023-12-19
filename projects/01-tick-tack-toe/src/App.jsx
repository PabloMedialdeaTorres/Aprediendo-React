import { useState } from "react";

const TURNS = {
  X: "x",
  O: "o",
};

// TODO: optimizar para que no haya que escribir cada combinacion ganadora
const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handelClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handelClick} className={className} key={index}>
      {children}
    </div>
  );
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  // null es que no hay ganador, false es que hay empate
  const [winner, setWinner] = useState(null);

  // revisar todas las combinaciones, para ver si X u O han ganado
  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    // si no hay, devuelve null porque no hay ganador
    return null;
  };

  const restart = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  const checkEndGame = (newBoard) => {
    // check si hay no hay mas espacios vacios
    // newBoard = [null, null, null, null, null, null, null, null, null]
    return newBoard.every((square) => square != null);
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
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // tie
    }
  };

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={restart}>Restart</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} updateBoard={updateBoard} index={index}>
              {square}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O} </Square>
      </section>
      {winner != null && (
        <section className="winner">
          <div className="text">
            <h2>{winner === false ? "Tie" : "Won"}</h2>
            <header className="win">
              {winner && <Square>{winner}</Square>}
              {winner === false && <Square>{"="}</Square>}
            </header>
            <footer>
              <button onClick={restart}>Restart</button>
            </footer>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
