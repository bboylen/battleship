import { buildGrid, returnPlacement } from "../gridHelper";

const calculateComputerMoveCoordinates = (playerGameboard) => {
  let coordinatesAcceptable = false;
  let coordinates = null;
  while (!coordinatesAcceptable) {
    coordinates = Math.floor(Math.random() * (99 + 1));
    if (
      !playerGameboard.shotsLanded[coordinates] &&
      !playerGameboard.shotsMissed[coordinates]
    )
      coordinatesAcceptable = true;
  }
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
      let shipOrigin = Math.floor(Math.random() * (99 + 1));
      let shipRotation =
        Math.floor(Math.random() * 2) > 0 ? "horizontal" : "vertical";
      shipCoordinates = returnPlacement(
        shipOrigin.toString(),
        shipLength,
        shipRotation,
        tempComputerGrid
      );
      shipOK = (shipCoordinates) ? true : false;
    }
    for (let coordinate of shipCoordinates) {
      tempGridPlacements[coordinate] = true;
    }
    tempComputerGrid = buildGrid(tempGridPlacements);
    returnShipPlacements.push(shipCoordinates);
  }
  return returnShipPlacements;
};

export {calculateComputerMoveCoordinates, chooseComputerShipPlaces};
