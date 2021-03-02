import { useState, useEffect } from "react";
import '../../styles/Cell.css';

const Cell = ({ props, handleHit }) => {
  const { id, containsShip, hit, miss } = props;
  console.log(hit, miss)
  return (
    <div
      className="cell"
      id={id}
      className={`${containsShip ? "ship" : ""} ${hit ? "hit" : ""} ${miss ? "miss" : ""}`}
      onClick={(e) => handleHit(e)}
    ></div>
  );
};

export default Cell;
