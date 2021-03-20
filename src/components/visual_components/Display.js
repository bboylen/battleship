import { useState, useEffect } from "react";
import Header from "./Header";
import GridContainer from "./GridContainer";
import Controls from "./Controls";
import "../../styles/Display.css";

const Display = (props) => {
  return (
    <div id="display-container">
      <Header />
      <Controls
        playerShips={props.playerShips}
        rotateShips={props.rotateShips}
        selectedShip={props.selectedShip}
        handleShipSelection={props.handleShipSelection}
      />
      <GridContainer
        handleHit={props.handleHit}
        playerGrid={props.playerGrid}
        computerGrid={props.computerGrid}
        playerTurn={props.playerTurn}
        gameBegun={props.gameBegun}
        selectedShip={props.selectedShip}
        handleShipPlacement={props.handleShipPlacement}
        cellsSelected={props.cellsSelected}
        removeCellSelection={props.removeCellSelection}
      />
    </div>
  );
};

export default Display;
