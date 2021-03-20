import { useState, useEffect } from "react";
import "../../styles/Cell.css";

const Cell = ({ cellData, handleHit, playerTurn, handleShipPlacement, cellsSelected, removeCellSelection }) => {
  const { id, containsShip, hit, miss } = cellData;
  // console.log(cellsSelected, id)
  return (
    <div
      id={id}
      className={`${containsShip ? "ship" : ""} ${hit ? "hit" : ""} ${
        miss ? "miss" : ""} ${(cellsSelected.includes(id)) ? "hovered" : ""}
        ${(cellsSelected.length === 1 && cellsSelected[0] == id) ? "not-allowed" : ""}`}
      onClick={playerTurn && !hit && !miss ? (e) => handleHit(e) : null}
      onMouseOver={handleShipPlacement}
      onMouseLeave={removeCellSelection}
    ></div>
  );
};

export default Cell;
