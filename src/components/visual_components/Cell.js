import { useState, useEffect } from "react";
import "../../styles/Cell.css";

const Cell = ({ props, handleHit }) => {
  const { id, containsShip, hit, miss } = props;
  return (
    <div
      className="cell"
      id={id}
      className={`${containsShip ? "ship" : ""} ${hit ? "hit" : ""} ${
        miss ? "miss" : ""
      }`}
      onClick={(!hit) ? ((e) => handleHit(e)) : (null) }
    ></div>
  );
};

export default Cell;
