const gridHelper = () => {
  const buildGrid = (parentDiv, gridPlacements) => {
    for (let i = 0; i < 100; i++) {
      let cell = document.createElement("div");
      cell.id = i;
      // can add other classes here too
      parentDiv.appendChild(cell);
    }
    
  };
  return {
    buildGrid,
  };
};

export default gridHelper;
