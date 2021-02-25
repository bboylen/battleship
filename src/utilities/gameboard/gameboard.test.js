import Gameboard from './gameboard';
import Ship from '../ship/ship';

test('places ships at specific coordinates',() => {
  const ship = {};
  const coordinates = ['A1','A2','A3'];
  const gridPlacements = {};
  const shipIndexes = {};
  Gameboard().placeShip(ship, coordinates, gridPlacements, shipIndexes);
  expect(gridPlacements).toEqual({'A1': ship, 'A2': ship, 'A3': ship})
  expect(shipIndexes).toEqual({[ship]: ['A1','A2','A3'] })
})

describe('processes hits from enemy', () => {
  jest.mock('../ship/ship');
  const ship = Ship(5);
  const coordinates = 'A1';
  const gridPlacements = {'A1': ship, 'A2': ship, 'A3': ship};
  const shipIndexes = {[ship]: ['A1','A2','A3'] };

  test('sends hit function to correct ship', () => {
    expect(Gameboard().receiveAttack(coordinates,gridPlacements,shipIndexes)).toEqual(ship.hit(0))
  });
});
