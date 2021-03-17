import { useState, useEffect } from "react";
import "../../styles/Ship.css";

const Ship = (props) => {

  return (
    <div
      className={`ship ${props.orientation}`}
      id={props.shipName}
      onClick={props.handleShipSelection}
    />
  );
};

export default Ship;
