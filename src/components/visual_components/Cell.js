import { useState, useEffect } from "react";
import '../../styles/Cell.css';

const Cell = ({ props, handleHit }) => {
  const { id, containsShip, hit } = props;
  return (
    <div
      className="cell"
      id={id}
      className={containsShip ? "ship" : null}
      className={hit ? "hit" : null}
      onClick={(e) => handleHit(e)}
    ></div>
  );
};

export default Cell;
