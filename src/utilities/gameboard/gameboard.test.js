import Gameboard from './gameboard';

test('places ships at specific coordinates',() => {
  const ship = {};
  const coordinates = ['A1','A2','A3'];
  const gridPlacements = {};
  const shipIndexes = {};
  Gameboard().placeShip(ship, coordinates, gridPlacements, shipIndexes);
  expect(gridPlacements).toEqual({'A1': ship, 'A2': ship, 'A3': ship})
  expect(shipIndexes).toEqual({[ship]: ['A1','A2','A3'] })
})