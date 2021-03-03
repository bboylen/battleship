import { React } from "react";
import Gameboard from "../utilities/gameboard/gameboard";
import Display from "./visual_components/Display";
import Player from "../utilities/player/player";
import Ship from "../utilities/ship/ship";
import gridHelper from "../utilities/gridHelper";
import { useState, useEffect } from "react";

const GameLogic = () => {
  // write helper function to set up gameboard
  // later on is populated by player though

  const populateGameboard = (gameboard) => {
    const ship1 = Ship(5);
    const ship2 = Ship(4);
    const ship3 = Ship(3);
    const ship4 = Ship(3);
    const ship5 = Ship(2);

    gameboard.placeShip(ship1, [0, 1, 2, 3, 4]);
    gameboard.placeShip(ship2, [10, 11, 12, 13]);
    gameboard.placeShip(ship3, [20, 21, 22]);
    gameboard.placeShip(ship4, [30, 31, 32]);
    gameboard.placeShip(ship5, [40, 41]);
    return gameboard;
  };

  const [player, setPlayer] = useState(Player());
  const [computer, setComputer] = useState(Player());
  const [playerGameboard, setPlayerGameboard] = useState(
    populateGameboard(Gameboard())
  );
  const [computerGameboard, setComputerGameboard] = useState(
    populateGameboard(Gameboard())
  );
  const [playerTurn, setPlayerTurn] = useState(true);
  // what else needs to be tracked? Whose turn it is, grid visual
  // track ship state?

  const [playerGrid, setPlayerGrid] = useState(
    gridHelper.buildGrid(playerGameboard.gridPlacements)
  );
  const [computerGrid, setComputerGrid] = useState(gridHelper.buildGrid());

  const switchTurns = () => {
    setPlayerTurn(!playerTurn);
  }

  const handleHit = (event) => {
    const coordinates = event.target.id;
    const gameboard = playerTurn ? playerGameboard : computerGameboard;
   // gameboard.receiveAttack(coordinates);
    // might need to refactor code to not mutate gameboard state here
    if (gameboard.gridPlacements[coordinates]) {
      playerTurn
        ? updateComputerGrid(coordinates, "hit")
        : updatePlayerGrid(coordinates, "hit");
    } else {
      playerTurn
        ? updateComputerGrid(coordinates, "miss")
        : updatePlayerGrid(coordinates, "miss");
    }

    switchTurns();
    //make this function do less
  };
  // temporary
  const updatePlayerGrid = (coordinates, hitStatus) => {
    const newGrid = [...playerGrid];
    newGrid[coordinates][hitStatus] = true;
    setPlayerGrid(newGrid);
  };

  const updateComputerGrid = (coordinates, hitStatus) => {
    const newGrid = [...computerGrid];
    newGrid[coordinates][hitStatus] = true;
    setComputerGrid(newGrid);
  };

  // click on cell -> receiveAttack(5) -> shotsLanded,ship.hit, shotsMissed -> useEffect / some hook sees change in state and updates grid
  return (
    <Display
      playerGrid={playerGrid}
      computerGrid={computerGrid}
      handleHit={handleHit}
      playerTurn={playerTurn}
    />
  );
};

export default GameLogic;
