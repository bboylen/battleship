import { useState, useEffect } from "react";
import "../../styles/Cell.css";

const Cell = ({ cellData, handleHit, playerTurn, handleShipPlacement, cellsSelected }) => {
  const { id, containsShip, hit, miss } = cellData;
  return (
    <div
      id={id}
      className={`${containsShip ? "ship" : ""} ${hit ? "hit" : ""} ${
        miss ? "miss" : ""} ${(cellsSelected.includes(id)) ? "hovered" : ""}`}
      onClick={playerTurn && !hit && !miss ? (e) => handleHit(e) : null}
      onMouseOver={handleShipPlacement}
    ></div>
  );
};

export default Cell;
