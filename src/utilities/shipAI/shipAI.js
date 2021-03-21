const calculateComputerMoveCoordinates = (playerGameboard) => {
  let coordinatesAcceptable = false;
  let coordinates = null;
  while (!coordinatesAcceptable) {
    coordinates = Math.floor(Math.random() * (99 + 1));
    if (!playerGameboard.shotsLanded[coordinates] && !playerGameboard.shotsMissed[coordinates]) coordinatesAcceptable = true;
  };
  return coordinates;
}

export default calculateComputerMoveCoordinates;