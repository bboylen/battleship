import Ship from '../ship/ship';

const Gameboard = () => {
  const gridPlacements = {};
  const shipIndexes = new Map();
  const shotsMissed = {};
  const shotsLanded = {};

  const placeShip = (ship, coordinates) => {
    for (let coord of coordinates) {
      gridPlacements[coord] = ship;
      if (!shipIndexes.has(ship)) {
        shipIndexes.set(ship, [coord]);
      } else {
        shipIndexes.set(ship, [...shipIndexes.get(ship), coord]);
      }
    }
  }

  const receiveAttack = (coordinates) => {
    if (coordinates in gridPlacements) {
      const ship = gridPlacements[coordinates]
      const shipIndex = shipIndexes.get(ship).findIndex((position) => position === coordinates);
      shotsLanded[coordinates] = true;
      return ship.hit(shipIndex);
    } else shotsMissed[coordinates] = true;
  }

  const allShipsSunk = () => {
    let oneNotSunk = false;
    shipIndexes.forEach((val,ship) => {
      if (ship.isSunk() === false) oneNotSunk = true;
    })

    if (oneNotSunk) {
      return false;
    } else {
      return true;
    }
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
