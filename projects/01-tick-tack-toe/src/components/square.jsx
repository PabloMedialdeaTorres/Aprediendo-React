export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  const classForPlayerColor =
    children === "✖" ? "is-x" : children === "=" ? "is-tie" : "is-o";

  const handelClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handelClick} className={className} key={index}>
      <span className={classForPlayerColor}>{children}</span>
    </div>
  );
};
