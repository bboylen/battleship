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

  return {
    placeShip,
    gridPlacements,
    shipIndexes
  }
}
export default Gameboard;
