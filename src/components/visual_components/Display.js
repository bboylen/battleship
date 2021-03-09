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
      />
      <GridContainer
        handleHit={props.handleHit}
        playerGrid={props.playerGrid}
        computerGrid={props.computerGrid}
        playerTurn={props.playerTurn}
        gameBegun={props.gameBegun}
      />
    </div>
  );
};

export default Display;
