import "../../styles/Cell.css";

const Cell = ({ cellData, handleHit, playerTurn, handleCellSelection, cellsSelected, removeCellSelection, handleShipPlacement, cellClickFunction, gameBegun }) => {
  const { id, containsShip, hit, miss } = cellData;
  return (
    <div
      id={id}
      className={`${containsShip ? "ship" : ""} ${hit ? "hit" : ""} ${
        miss ? "miss" : ""} ${(cellsSelected.includes(id)) ? "hovered" : ""}
        ${(cellsSelected.length === 1 && cellsSelected[0] === id) ? "not-allowed" : ""}`}
      onMouseOver={(gameBegun) ? null : handleCellSelection}
      onMouseLeave={(gameBegun) ? null : removeCellSelection}
      onClick={(gameBegun) ? (playerTurn && !hit && !miss ? (e) => handleHit(e) : null) : cellClickFunction}
    ></div>
  );
};

export default Cell;
