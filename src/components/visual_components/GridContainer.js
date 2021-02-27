import { useState, useEffect } from 'react';
import '../../styles/GridContainer.css';
import Grid from './Grid';

const GridContainer = () => {
  return (
    <div id="grid-container">
      <Grid />
      <Grid />
    </div>
  );
};

export default GridContainer;
