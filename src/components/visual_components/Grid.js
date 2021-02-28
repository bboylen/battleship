import { useState, useEffect } from 'react';
import '../../styles/Grid.css';
//import gridHelper from '../../utilities/gridHelper';

const Grid = (props) => {
  console.log(props.grid)
  return (
    <div id="grid">
      {props.grid.map((cell) => {
        console.log(cell)
        return cell;
      })}
    </div>
  );
};

export default Grid;
