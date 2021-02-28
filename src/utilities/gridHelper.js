
const gridHelper = {
  buildGrid: (gridPlacements = false) => {
    const cellArray = [];
    for (let i = 0; i < 100; i++) {
      let cell = {};
      cell.id = i;      
      if (gridPlacements && gridPlacements[i]) {
        cell.containsShip = true;
      }
      cellArray.push(cell);
    }
    return cellArray;
  }
}
export default gridHelper;
