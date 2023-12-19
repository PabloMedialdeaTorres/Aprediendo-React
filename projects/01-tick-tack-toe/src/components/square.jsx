import { TURNS } from "../constants/constants";

export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  const classForPlayerColor =
    children === TURNS.X ? "is-x" : children === "=" ? "is-tie" : "is-o";

  const handelClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handelClick} className={className} key={index}>
      <span className={classForPlayerColor}>{children}</span>
    </div>
  );
};
