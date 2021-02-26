import Gameboard from './gameboard';
import Ship from '../ship/ship';

test('places ships at specific coordinates',() => {
  const ship = {};
  const gameboard = Gameboard();
  const coordinates = ['A1','A2','A3'];
  gameboard.placeShip(ship, coordinates);
  expect(gameboard.gridPlacements).toEqual({'A1': ship, 'A2': ship, 'A3': ship})
  expect(gameboard.shipIndexes.get(ship)).toEqual(['A1','A2','A3'])
})

describe('processes shots from enemy', () => {
  jest.mock('../ship/ship');
  const ship = Ship(3);
  const gameboard = Gameboard();
  const coordinates = ['A1','A2','A3'];
  gameboard.placeShip(ship, coordinates);

  test('sends hit function to correct ship with correct index', () => {
    const coordinates = 'A1';
    expect(gameboard.receiveAttack(coordinates)).toEqual(ship.hit(0))
  });

  test('records coordinates of shot that lands', () => {
    const coordinates = 'A1';
    gameboard.receiveAttack(coordinates);
    expect(gameboard.shotsLanded[coordinates]).toBeTruthy();
    expect(gameboard.shotsMissed[coordinates]).toBeFalsy();
  });

  test('records coordinates of shot that misses', () => {
    const coordinates = 'A4';
    gameboard.receiveAttack(coordinates);
    expect(gameboard.shotsLanded[coordinates]).toBeFalsy();
    expect(gameboard.shotsMissed[coordinates]).toBeTruthy();
  });
});

describe('determines if all ships are sunk', () => {
  jest.mock('../ship/ship');
  
  test('says all ships are sunk', () => {
    const ship = Ship(3);
    const gameboard = Gameboard();
    const coordinates = ['A1','A2','A3'];
    gameboard.placeShip(ship, coordinates);
    gameboard.receiveAttack('A1');
    gameboard.receiveAttack('A2');
    gameboard.receiveAttack('A3');
    expect(gameboard.allShipsSunk()).toBe(true);
  })
  
  test('says not all ships are sunk', () => {
    const ship = Ship(3);
    const gameboard = Gameboard();
    const coordinates = ['A1','A2','A3'];
    gameboard.placeShip(ship, coordinates);
    expect(gameboard.allShipsSunk()).toBe(false);
  })
})
