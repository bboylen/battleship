import { useState, useEffect } from "react";
import "../../styles/GridContainer.css";
import Grid from "./Grid";

const GridContainer = (props) => {
  const { playerTurn } = props;
  const computerTurn = !playerTurn;
  console.log(playerTurn, computerTurn);
  return (
    <div id="grid-container">
      <Grid
        grid={props.playerGrid}
        handleHit={props.handleHit}
        playerTurn={playerTurn}
      />
      <Grid
        grid={props.computerGrid}
        handleHit={props.handleHit}
        playerTurn={computerTurn}
      />
    </div>
  );
};

export default GridContainer;
