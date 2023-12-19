import { TURNS } from "../constants/constants";
import { useEffect, useState } from "react";

export const Square = ({
  children,
  isSelected,
  updateBoard,
  resetFadeIn,
  index,
}) => {
  const [fadeIn, setFadeIn] = useState(false);
  const className = `square ${isSelected ? "is-selected" : ""}`;
  const classForPlayerColor =
    children === TURNS.X ? "is-x" : children === "=" ? "is-tie" : "is-o";
  const fadeClass = fadeIn ? "fade-in" : "";

  useEffect(() => {
    if (resetFadeIn) {
      setFadeIn(false);
    }
  }, [resetFadeIn]);

  const handelClick = () => {
    updateBoard(index);
    setFadeIn(true);
  };

  return (
    <div onClick={handelClick} className={className} key={index}>
      <span className={`${classForPlayerColor} ${fadeClass}`}>{children}</span>
    </div>
  );
};
