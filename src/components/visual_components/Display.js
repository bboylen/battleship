import Header from "./Header";
import GridContainer from "./GridContainer";
import Controls from "./Controls";
import GameOverModal from "./GameOverModal";
import "../../styles/Display.css";

const Display = (props) => {
  return (
    <div id="display-container">
      <Header />
      <Controls
        playerShips={props.playerShips}
        rotateShips={props.rotateShips}
        selectedShip={props.selectedShip}
        handleShipSelection={props.handleShipSelection}
        gameBegun={props.gameBegun}
        gameMessage={props.gameMessage}
      />
      <GridContainer
        handleHit={props.handleHit}
        playerGrid={props.playerGrid}
        computerGrid={props.computerGrid}
        playerTurn={props.playerTurn}
        gameBegun={props.gameBegun}
        selectedShip={props.selectedShip}
        handleCellSelection={props.handleCellSelection}
        cellsSelected={props.cellsSelected}
        removeCellSelection={props.removeCellSelection}
        handleShipPlacement={props.handleShipPlacement}
        cellClickFunction={props.cellClickFunction}
      />
      {props.modalActive ? (
        <GameOverModal
          victoryMessage={props.victoryMessage}
          handleRestartGame={props.handleRestartGame}
        />
      ) : null}
    </div>
  );
};

export default Display;
