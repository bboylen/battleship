import Player from './player'
import Gameboard from '../gameboard/gameboard';

test('player can attack', () => {
const gameboard = Gameboard();   
const coordinates = 'A1';
expect(Player().attack(gameboard,coordinates)).toEqual(gameboard.receiveAttack(coordinates))
})