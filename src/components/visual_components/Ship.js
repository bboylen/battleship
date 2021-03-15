import { useState, useEffect } from "react";
import "../../styles/Ship.scss";

const Ship = (props) => {
  return <div className={`ship ${props.shipName} ${props.orientation}`} />;
};

export default Ship;
