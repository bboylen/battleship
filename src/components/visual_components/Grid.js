import "../../styles/Grid.css";
import Cell from "./Cell";

const Grid = (props) => {
  return (
    <div id="grid">
      {props.grid.map((cell) => {
        return (
          <Cell
            cellData={cell}
            handleHit={props.handleHit}
            playerTurn={props.playerTurn}
            handleCellSelection={props.handleCellSelection}
            cellsSelected={props.cellsSelected}
            removeCellSelection={props.removeCellSelection}
            handleShipPlacement={props.handleShipPlacement}
            cellClickFunction={props.cellClickFunction}
            gameBegun={props.gameBegun}
          />
        );
      })}
    </div>
  );
};

export default Grid;
