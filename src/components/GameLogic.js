import { React } from "react";
import Gameboard from "../utilities/gameboard/gameboard";
import Display from "./visual_components/Display";
import Player from "../utilities/player/player";
import Ship from "../utilities/ship/ship";
import gridHelper from "../utilities/gridHelper";
import { useState, useEffect } from "react";
const clonedeep = require("../../node_modules/lodash.clonedeep");

const GameLogic = () => {
  // need method to dynamically generate AI board?
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
  const [gameBegun, setGameBegun] = useState(true);
  // what else needs to be tracked? grid visual / ship state

  const [playerGrid, setPlayerGrid] = useState(
    gridHelper.buildGrid(playerGameboard.gridPlacements)
  );
  const [computerGrid, setComputerGrid] = useState(gridHelper.buildGrid());

  // Can I do this with one data structure
  const [playerShips, setPlayerShips] = useState({
    carrier: "horizontal",
    battleship: "horizontal",
    destroyer: "horizontal",
    submarine: "horizontal",
    "patrol-boat": "horizontal",
  });

  const [selectedShip, setSelectedShip] = useState(playerShips.carrier);

  const handleShipSelection = (e) => {
    console.log(e.target.id);
    setSelectedShip(e.target);
  }

  // rotate one at a time
  const rotateShips = (e) => {
    const rotatedShips = { ...playerShips };
    for (let ship in rotatedShips) {
      rotatedShips[ship] =
        rotatedShips[ship] === "horizontal" ? "vertical" : "horizontal";
    }
    setPlayerShips(rotatedShips);
  };

  const switchTurns = () => {
    setPlayerTurn(!playerTurn);
  };

  const updatePlayerGameboard = (coordinates) => {
    //still mutating
    // CHECK
    let holder = { ...playerGameboard };
    holder.receiveAttack(coordinates);
    setPlayerGameboard(holder);
  };

  const updateComputerGameboard = (coordinates) => {
    //still mutating
    // CHECK
    let holder = { ...computerGameboard };
    holder.receiveAttack(coordinates);
    setComputerGameboard(holder);
  };

  const handleHit = (event) => {
    const coordinates = event.target.id;

    if (playerTurn) {
      var gameboard = playerGameboard;
      updateComputerGameboard(coordinates);
    } else {
      var gameboard = computerGameboard;
      updatePlayerGameboard(coordinates);
    }

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

  const gameOver = (winner) => {};

  useEffect(() => {
    if (playerGameboard.allShipsSunk()) gameOver(player);
  }, [playerGameboard]);

  useEffect(() => {
    if (computerGameboard.allShipsSunk()) gameOver(computer);
  }, [computerGameboard]);

  const updatePlayerGrid = (coordinates, hitStatus) => {
    // this might mutates state
    // const newGrid = [...playerGrid];
    const newGrid = clonedeep(playerGrid);
    newGrid[coordinates][hitStatus] = true;
    setPlayerGrid(newGrid);
  };

  const updateComputerGrid = (coordinates, hitStatus) => {
    const newGrid = clonedeep(computerGrid);
    newGrid[coordinates][hitStatus] = true;
    setComputerGrid(newGrid);
  };

  return (
    <Display
      playerGrid={playerGrid}
      computerGrid={computerGrid}
      handleHit={handleHit}
      playerTurn={playerTurn}
      gameBegun={gameBegun}
      playerShips={playerShips}
      rotateShips={rotateShips}
      selectedShip={selectedShip}
      handleShipSelection={handleShipSelection}
    />
  );
};

export default GameLogic;
