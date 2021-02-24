const Ship = (length) => {
  const hitArray = new Array(length).fill(null);

  const hit = (position) => {
    hitArray[position] = 'X';
  }

  const isSunk = () => {
    return hitArray.every((shipPart) => shipPart === 'X');
  } 

  return {
    length,
    hitArray,
    hit,
    isSunk
  }
}

export default Ship;