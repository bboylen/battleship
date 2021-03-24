import "../../styles/Ship.css";

const Ship = (props) => {
  return (
    <div
      className={`ship ${props.orientation} ${
        props.selectedShip === props.shipName ? "selected" : ""
      }`}
      id={props.shipName}
      onClick={props.handleShipSelection}
    />
  );
};

export default Ship;
