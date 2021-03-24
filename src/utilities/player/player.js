// Ended up not using this class

const Player = () => {
  let gameboard = {};

  const attack = (gameboard, coordinates) => {
    gameboard.receiveAttack(coordinates);
  } 

  return {
    attack,
    gameboard
  }
}

export default Player;