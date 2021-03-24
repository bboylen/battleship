import "../../styles/GridContainer.css";
import Grid from "./Grid";

const GridContainer = (props) => {
  const { playerTurn } = props;
  const computerTurn = !playerTurn;
  return (
    <div id="grid-container">
      <Grid
        grid={props.playerGrid}
        handleHit={props.handleHit}
        playerTurn={computerTurn}
        selectedShip={props.selectedShip}
        handleCellSelection={props.handleCellSelection}
        cellsSelected={props.cellsSelected}
        removeCellSelection={props.removeCellSelection}
        handleShipPlacement={props.handleShipPlacement}
        cellClickFunction={props.cellClickFunction}
        gameBegun={props.gameBegun}
      />
      {props.gameBegun ? (<Grid
        grid={props.computerGrid}
        handleHit={props.handleHit}
        playerTurn={playerTurn}
        cellsSelected={props.cellsSelected}
        gameBegun={props.gameBegun}
      />) : (null)}

    </div>
  );
};

export default GridContainer;
