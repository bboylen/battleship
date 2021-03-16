import { useState, useEffect } from "react";
import "../../styles/Cell.css";

const Cell = ({ props, handleHit, playerTurn }) => {
  const { id, containsShip, hit, miss } = props;

  const handleDragOver = (e) => {
    e.preventDefault();
    console.log(e.target)
  }

  return (
    <div
      className="cell"
      id={id}
      className={`${containsShip ? "ship" : ""} ${hit ? "hit" : ""} ${
        miss ? "miss" : ""
      }`}
      onClick={(playerTurn && (!hit && !miss)) ? ((e) => handleHit(e)) : (null) }
      onDragOver={e => handleDragOver(e)}
    ></div>
      
  );
};

export default Cell;
