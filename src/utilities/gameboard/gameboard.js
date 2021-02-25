import Ship from '../ship/ship';

const Gameboard = () => {
  const gridPlacements = {};
  const shipIndexes = new Map();
  const shotsMissed = {};
  const shotsLanded = {};

  const placeShip = (ship, coordinates) => {
    for (let coord of coordinates) {
      gridPlacements[coord] = ship;
      if (!shipIndexes[ship]) {
        shipIndexes[ship] = [coord];
      } else {
        shipIndexes[ship].push(coord);
      }
    }
  }

  const receiveAttack = (coordinates) => {
    if (coordinates in gridPlacements) {
      const ship = gridPlacements[coordinates]
      const shipIndex = shipIndexes[ship].findIndex((position) => position === coordinates);
      shotsLanded[coordinates] = true;
      return ship.hit(shipIndex);
    } else shotsMissed[coordinates] = true;
  }

  const allShipsSunk = () => {
    for (let ship in shipIndexes) {
      console.log([ship]);
      console.log(shipIndexes[ship]);
      if (!ship.isSunk()) return false;
    }
    return true;
  }
  return {
    placeShip,
    receiveAttack,
    allShipsSunk,
    gridPlacements,
    shipIndexes,
    shotsMissed,
    shotsLanded
  }
}
export default Gameboard;
