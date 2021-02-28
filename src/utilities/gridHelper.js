
const gridHelper = {
  buildGrid: (gridPlacements = false) => {
    const cellArray = [];
    for (let i = 0; i < 100; i++) {
      let cell = document.createElement("div");
      cell.id = i;      
      if (gridPlacements && gridPlacements[i]) {
        cell.classList.add('ship')
      }
      cellArray.push(cell);
    }
    return cellArray;
  }
}
export default gridHelper;
