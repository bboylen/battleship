import { useState, useEffect } from "react";
import "../../styles/Grid.css";
import Cell from "./Cell";

const Grid = (props) => {
  return (
    <div id="grid">
      {props.grid.map((cell) => {
        return <Cell props={cell} handleHit={props.handleHit} playerTurn={props.playerTurn}/>;
      })}
    </div>
  );
};

export default Grid;
