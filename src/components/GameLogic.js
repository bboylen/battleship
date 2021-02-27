import { React } from "react";
import Gameboard from "../utilities/gameboard/gameboard";
import Display from "./visual_components/Display";
import Player from "../utilities/player/player";
import Ship from "../utilities/ship/ship";
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

    gameboard.placeShip(ship1, ["A1", "A2", "A3", "A4", "A5"]);
    gameboard.placeShip(ship2, ["C1", "C2", "C3", "C4"]);
    gameboard.placeShip(ship3, ["E1", "E2", "E3"]);
    gameboard.placeShip(ship4, ["D1", "D2", "D3"]);
    gameboard.placeShip(ship5, ["B1", "B2"]);
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
// what else needs to be tracked? Whose turn it is, grid visual



  return <Display />;
};

export default GameLogic;
