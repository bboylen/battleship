import { useState, useEffect } from 'react';
import Header from './Header';
import Grid from './GridContainer';
import Controls from './Controls';
import '../../styles/Display.css';

const Display = () => {
  return (
    <div id="display-container">
      <Header />
      <Controls />
      <Grid />
    </div>
  );
};

export default Display;
