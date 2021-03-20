import { useState, useEffect } from "react";
import "../../styles/Grid.css";
import Cell from "./Cell";

const Grid = (props) => {
  return (
    <div id="grid">
      {props.grid.map((cell) => {
        return (
          <Cell
            cellData={cell}
            handleHit={props.handleHit}
            playerTurn={props.playerTurn}
            handleShipPlacement={props.handleShipPlacement}
            cellsSelected={props.cellsSelected}
            removeCellSelection={props.removeCellSelection}
          />
        );
      })}
    </div>
  );
};

export default Grid;
