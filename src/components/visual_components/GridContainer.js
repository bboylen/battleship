import { useState, useEffect } from 'react';
import '../../styles/GridContainer.css';
import Grid from './Grid';

const GridContainer = (props) => {
  return (
    <div id="grid-container">
      <Grid grid={props.playerGrid} handleHit={props.handleHit}/>
      <Grid grid={props.computerGrid} handleHit={props.handleHit}/>
    </div>
  );
};

export default GridContainer;
