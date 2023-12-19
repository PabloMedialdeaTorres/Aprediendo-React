export const checkEndGame = (newBoard) => {
  // check si hay no hay mas espacios vacios
  // newBoard = [null, null, null, null, null, null, null, null, null]
  return newBoard.every((square) => square != null);
};
