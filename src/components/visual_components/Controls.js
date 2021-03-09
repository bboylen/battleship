import { useState, useEffect } from "react";
import Ship from './Ship';
import '../../styles/Controls.css';

const Controls = (props) => {
  return (
    <div id="controls">
      <div id="text">
        <p>
          Player's turn
        </p>
      </div>
      <div id="ship-container">
        {Object.keys(props.playerShips).map((shipName) => (
          <Ship shipName={shipName} orientation={props.playerShips[shipName]}/>
        ))}
      </div>
      <div id="button-container">
        <button id="rotate-ship-btn" onClick={props.rotateShips} >
          Rotate Ships
        </button>
      </div>
    </div>
  );
};

export default Controls;
