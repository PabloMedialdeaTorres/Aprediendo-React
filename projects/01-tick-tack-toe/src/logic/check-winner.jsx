import { WINNER_COMBOS } from "../constants/constants";

// revisar todas las combinaciones, para ver si X u O han ganado
export const checkWinner = (boardToCheck) => {
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
