import { buildGrid, returnPlacement } from "../gridHelper";

const calculateComputerMoveCoordinates = (playerGameboard) => {
  console.log(playerGameboard);
  let coordinatesAcceptable = false;
  let coordinates = null;
  let partiallySunkShipCoords = [];
  for (let shipCoord in playerGameboard.gridPlacements) {
    if (
      playerGameboard.gridPlacements[shipCoord].hitArray.includes("X") &&
      playerGameboard.gridPlacements[shipCoord].hitArray.includes(null)
    ) {
      if (playerGameboard.shotsLanded[shipCoord] === true) {
        partiallySunkShipCoords.push(shipCoord);
      }
    }
  }
  while (!coordinatesAcceptable) {
    if (partiallySunkShipCoords.length > 0) {
      let hitCoord =
        parseInt(partiallySunkShipCoords[
          Math.floor(Math.random() * partiallySunkShipCoords.length)
        ]);
      let coordChooser = Math.floor(Math.random() * (99 + 1));
      if (coordChooser < 25) {
        coordinates = hitCoord + 1;
      } else if (coordChooser < 50) {
        coordinates = hitCoord - 1;
      } else if (coordChooser < 75) {
        coordinates = hitCoord + 10;
      } else {
        coordinates = hitCoord - 10;
      }
    } else {
      coordinates = Math.floor(Math.random() * (99 + 1));
    }
    if (
      !playerGameboard.shotsLanded[coordinates] &&
      !playerGameboard.shotsMissed[coordinates] &&
      coordinates > 0 && coordinates < 100
    )
      coordinatesAcceptable = true;
  }
  console.log(coordinates);
  return coordinates;
};

const chooseComputerShipPlaces = () => {
  let returnShipPlacements = [];
  let tempComputerGrid = buildGrid();
  let tempGridPlacements = {};
  const shipLengths = [5, 4, 3, 3, 2];
  for (let shipLength of shipLengths) {
    let shipOK = false;
    let shipCoordinates = [];
    while (!shipOK) {
      let shipOrigin = Math.floor(Math.random() * 100);
      let shipRotation =
        Math.floor(Math.random() * 2) > 0 ? "horizontal" : "vertical";
      shipCoordinates = returnPlacement(
        shipOrigin.toString(),
        shipLength,
        shipRotation,
        tempComputerGrid
      );
      shipOK = shipCoordinates ? true : false;
    }
    for (let coordinate of shipCoordinates) {
      tempGridPlacements[coordinate] = true;
    }
    tempComputerGrid = buildGrid(tempGridPlacements);
    returnShipPlacements.push(shipCoordinates);
  }
  return returnShipPlacements;
};

export { calculateComputerMoveCoordinates, chooseComputerShipPlaces };
