import { useState, useEffect } from "react";
import "../../styles/Ship.css";

const Ship = (props) => {

  return (
    <div
      className={`ship ${props.shipName} ${props.orientation}`}
    />
  );
};

export default Ship;
