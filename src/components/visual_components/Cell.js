import { useState, useEffect } from "react";
//import '../../styles/Cell.css';

const Cell = ({ props }) => {
  const { id, containsShip } = props;
  return (
    <div
      className="cell"
      id={id}
      className={containsShip ? "ship" : null}
    ></div>
  );
};

export default Cell;
