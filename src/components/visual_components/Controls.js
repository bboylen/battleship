import Ship from "./Ship";
import "../../styles/Controls.css";

const Controls = (props) => {
  return (
    <div id="controls">
      <div id="text">
        <p>{props.gameMessage}</p>
      </div>
      <div id="ship-container">
        {Object.keys(props.playerShips).map((shipName) => (
          <Ship
            shipName={shipName}
            orientation={props.playerShips[shipName]}
            selectedShip={props.selectedShip}
            handleShipSelection={props.handleShipSelection}
          />
        ))}
      </div>
      {!props.gameBegun ? (<div id="button-container">
        <button id="rotate-ship-btn" onClick={props.rotateShips}>
          ROTATE SHIPS
        </button>
      </div>) : null }
      
    </div>
  );
};

export default Controls;
