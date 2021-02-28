import { useState, useEffect } from 'react';
import '../../styles/GridContainer.css';
import Grid from './Grid';

const GridContainer = (props) => {
  return (
    <div id="grid-container">
      <Grid grid={props.playerGrid}/>
      <Grid grid={props.computerGrid}/>
    </div>
  );
};

export default GridContainer;
