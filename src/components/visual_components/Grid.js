import { useState, useEffect } from "react";
import "../../styles/Grid.css";
import Cell from "./Cell";

const Grid = (props) => {
  console.log(props.grid);
  return (
    <div id="grid">
      {props.grid.map((cell) => {
        return <Cell props={cell} handleHit={props.handleHit}/>;
      })}
    </div>
  );
};

export default Grid;
