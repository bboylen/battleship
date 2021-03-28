import { React } from "react";
import Gameboard from "../utilities/gameboard/gameboard";
import Display from "./visual_components/Display";
import Ship from "../utilities/ship/ship";
import { buildGrid, returnPlacement } from "../utilities/gridHelper";
import {
  calculateComputerMoveCoordinates,
  chooseComputerShipPlaces,
} from "../utilities/shipAI/shipAI";
import { useState, useEffect } from "react";
const clonedeep = require("../../node_modules/lodash.clonedeep");

const GameLogic = () => {
  // Initialize state variables

  const [playerGameboard, setPlayerGameboard] = useState(Gameboard());

  const populateComputerGameboard = () => {
    const shipPlacements = chooseComputerShipPlaces();
    const ship1 = Ship(5);
    const ship2 = Ship(4);
    const ship3 = Ship(3);
    const ship4 = Ship(3);
    const ship5 = Ship(2);

    let gameboard = Gameboard();
    gameboard.placeShip(ship1, shipPlacements[0]);
    gameboard.placeShip(ship2, shipPlacements[1]);
    gameboard.placeShip(ship3, shipPlacements[2]);
    gameboard.placeShip(ship4, shipPlacements[3]);
    gameboard.placeShip(ship5, shipPlacements[4]);
    return gameboard;
  };

  const [computerGameboard, setComputerGameboard] = useState(
    populateComputerGameboard()
  );
  const [playerTurn, setPlayerTurn] = useState(true);
  const [gameBegun, setGameBegun] = useState(false);
  const [playerGrid, setPlayerGrid] = useState(
    buildGrid(playerGameboard.gridPlacements)
  );
  const [computerGrid, setComputerGrid] = useState(buildGrid());
  const [playerShips, setPlayerShips] = useState({
    carrier: "horizontal",
    battleship: "horizontal",
    destroyer: "horizontal",
    submarine: "horizontal",
    "patrol-boat": "horizontal",
  });
  const shipLength = {
    carrier: 5,
    battleship: 4,
    destroyer: 3,
    submarine: 3,
    "patrol-boat": 2,
  };
  const [gameMessage, setGameMessage] = useState(
    "Please select and place all ships"
  );

  // Allow player to select and place ships
  const [selectedShip, setSelectedShip] = useState({});
  const [cellsSelected, setCellsSelected] = useState([]);

  const handleShipSelection = (e) => {
    setSelectedShip(e.target.id);
  };

  // Determines if hovered cell is a valid place for ship
  const handleCellSelection = (e) => {
    const hoverArray = returnPlacement(
      e.target.id,
      shipLength[selectedShip],
      playerShips[selectedShip],
      playerGrid
    );
    // why not just return hover array? check later
    setCellsSelected(hoverArray ? hoverArray : [parseInt(e.target.id)]);
  };

  const removeCellSelection = () => {
    setCellsSelected([]);
  };

  const removeShip = (shipId) => {
    let playerShipList = { ...playerShips };
    delete playerShipList[shipId];
    setPlayerShips(playerShipList);
    setSelectedShip({});
  };

  const handleShipPlacement = (e) => {
    const newShip = Ship(cellsSelected.length);
    let updatedGameboard = { ...playerGameboard };
    updatedGameboard.placeShip(newShip, cellsSelected);
    removeCellSelection();
    setPlayerGameboard(updatedGameboard);
    removeShip(selectedShip);
  };

  useEffect(() => {
    if (!gameBegun) setPlayerGrid(buildGrid(playerGameboard.gridPlacements));
  }, [playerGameboard]);

  // Cell components only have the function to place ships if the placement is valid
  const [cellClickFunction, setCellClickFunction] = useState();

  useEffect(() => {
    if (cellsSelected.length === 1) {
      setCellClickFunction(null);
    } else {
      setCellClickFunction(() => handleShipPlacement);
    }
  }, [cellsSelected]);

  // Start game once user has placed all ships
  useEffect(() => {
    if (Object.keys(playerShips).length === 0) setGameBegun(true);
  }, [playerShips]);

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

  useEffect(() => {
    if (gameBegun && playerTurn) {
      setGameMessage("It is the Player's Turn");
    } else if (gameBegun && !playerTurn) {
      setGameMessage("It is the Computer's Turn");
    }
  }, [playerTurn, gameBegun]);

  const updatePlayerGameboard = (coordinates) => {
    let holder = { ...playerGameboard };
    holder.receiveAttack(coordinates);
    setPlayerGameboard(holder);
  };

  const updateComputerGameboard = (coordinates) => {
    let holder = { ...computerGameboard };
    holder.receiveAttack(coordinates);
    setComputerGameboard(holder);
  };

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

  // Prevents user from making move for computer. Should refactor so the player grid does not receive the handleHit function
  const handleHit = (event) => {
    if (!playerTurn) return;
    const coordinates = event.target.id;
    processHit(coordinates);
  };

  const processHit = (coordinates) => {
    if (playerTurn) {
      var gameboard = computerGameboard;
      updateComputerGameboard(coordinates);
    } else {
      var gameboard = playerGameboard;
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
  };

  useEffect(() => {
    if (!playerTurn) {
      setTimeout(
        () => processHit(calculateComputerMoveCoordinates(playerGameboard)),
        1
      );
    }
  }, [playerTurn]);
//750
  // Determine if game over & create game over modal
  const [modalActive, setModalActive] = useState(false);
  const [victoryMessage, setVictoryMessage] = useState("");

  const gameOver = (winner) => {
    if (winner === "player") {
      setVictoryMessage("Player Wins :)");
    } else {
      setVictoryMessage("Computer Wins :(");

    }
    setModalActive(true);
  };

  useEffect(() => {
    if (gameBegun && playerGameboard.allShipsSunk()) gameOver("player");
  }, [playerGameboard]);

  useEffect(() => {
    if (gameBegun && computerGameboard.allShipsSunk()) gameOver("computer");
  }, [computerGameboard]);

  // Reset Game
  const handleRestartGame = (e) => {
    console.log("ahh sheet")
    setModalActive(false);
  }

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
      handleCellSelection={handleCellSelection}
      cellsSelected={cellsSelected}
      removeCellSelection={removeCellSelection}
      handleShipPlacement={handleShipPlacement}
      cellClickFunction={cellClickFunction}
      gameMessage={gameMessage}
      modalActive={modalActive}
      victoryMessage={victoryMessage}
      handleRestartGame={handleRestartGame}
    />
  );
};

export default GameLogic;
