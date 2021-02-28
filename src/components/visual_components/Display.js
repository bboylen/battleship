import { useState, useEffect } from 'react';
import Header from './Header';
import GridContainer from './GridContainer';
import Controls from './Controls';
import '../../styles/Display.css';

const Display = (props) => {
  return (
    <div id="display-container">
      <Header />
      <Controls />
      <GridContainer playerGrid={props.playerGrid} computerGrid={props.computerGrid}/>
    </div>
  );
};

export default Display;
