import { useState, useEffect } from "react";
import "../../styles/GridContainer.css";
import Grid from "./Grid";

const GridContainer = (props) => {
  const { playerTurn } = props;
  const computerTurn = !playerTurn;
  return (
    <div id="grid-container">
      <Grid
        grid={props.playerGrid}
        handleHit={props.handleHit}
        playerTurn={computerTurn}
        selectedShip={props.selectedShip}
        handleShipPlacement={props.handleShipPlacement}
      />
      {props.gameBegun ? (<Grid
        grid={props.computerGrid}
        handleHit={props.handleHit}
        playerTurn={playerTurn}
      />) : (null)}

    </div>
  );
};

export default GridContainer;
