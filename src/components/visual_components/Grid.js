import { useState, useEffect } from 'react';
import '../../styles/Grid.css';
import Cell from './Cell';

const Grid = (props) => {
  console.log(props.grid)
  return (
    <div id="grid">
      {props.grid.map((cell) => {
        console.log(cell);
        return <Cell props={cell} />
})}
    </div>
  );
};

export default Grid;
