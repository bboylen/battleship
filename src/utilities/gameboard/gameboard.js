import Ship from '../ship/ship';

const Gameboard = () => {
  const gridPlacements = {};
  const shipIndexes = {};

  const placeShip = (ship, coordinates, gridPlacements, shipIndexes) => {
    for (let coord of coordinates) {
      gridPlacements[coord] = ship;
      if (!shipIndexes[ship]) {
        shipIndexes[ship] = [coord];
      } else {
        shipIndexes[ship].push(coord);
      }
    }
  }

  const receiveAttack = (coordinates, gridPlacements, shipIndexes) => {
    if (coordinates in gridPlacements) {
      const ship = gridPlacements[coordinates]
      const shipIndex = shipIndexes[ship].findIndex((position) => position === coordinates);
      return ship.hit(shipIndex);
    } 
  }

  // const determineShipCoordIndex = (ship, coordinates) => {
  //   console.log(gridPlacements)
  //   return shipIndexes[ship].findIndex(coordinates);
  // }

  return {
    placeShip,
    receiveAttack,
    gridPlacements,
    shipIndexes
  }
}
export default Gameboard;
