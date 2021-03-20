import { useState, useEffect } from "react";
import "../../styles/Cell.css";

const Cell = ({ cellData, handleHit, playerTurn, handleCellSelection, cellsSelected, removeCellSelection, handleShipPlacement }) => {
  const { id, containsShip, hit, miss } = cellData;
  return (
    <div
      id={id}
      className={`${containsShip ? "ship" : ""} ${hit ? "hit" : ""} ${
        miss ? "miss" : ""} ${(cellsSelected.includes(id)) ? "hovered" : ""}
        ${(cellsSelected.length === 1 && cellsSelected[0] === id) ? "not-allowed" : ""}`}
      // onClick={playerTurn && !hit && !miss ? (e) => handleHit(e) : null}
      onMouseOver={handleCellSelection}
      onMouseLeave={removeCellSelection}
      onClick={handleShipPlacement}
    ></div>
  );
};

export default Cell;
