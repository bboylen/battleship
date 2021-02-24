import Ship from './ship';

test('it has a length', () => {
  expect(Ship(4).length).toBe(4)
});

test('it shows where it has been hit', () => {
  expect(Ship(4).hitArray).toEqual([null,null,null,null])
});

test('it can mark positions as hit', () => {
  const mockShip = Ship(4);
  mockShip.hit(3);
  expect(mockShip.hitArray).toEqual([null,null,null,'X'])
});

test('it shows if it has been sunk', () => {
  const mockShip = Ship(4);
  expect(mockShip.isSunk()).toBe(false);

  mockShip.hit(0);
  mockShip.hit(1);
  mockShip.hit(2);
  mockShip.hit(3);

  expect(mockShip.isSunk()).toBe(true);
})