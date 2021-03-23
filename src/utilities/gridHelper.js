const buildGrid = (gridPlacements = false) => {
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
  };

  const returnPlacement = (cellIdStr, shipLength, shipRotation, grid) => {
    const cellIdNum = parseInt(cellIdStr);
    const cellPlacements = [cellIdNum];
    let validPlacement = true;
    if (shipRotation === "horizontal") {
      switch (shipLength) {
        case 5:
          if (
            (cellIdStr.match(/[0-5]$/) || cellIdStr.match(/.[0-5]$/)) &&
            !grid[cellIdNum].containsShip
          ) {
            for (let i = 1; i < shipLength; i++) {
              if (grid[cellIdNum + i].containsShip) {
                validPlacement = false;
                break;
              }
              cellPlacements.push(cellIdNum + i);
            }
          } else {
            validPlacement = false;
          }
          break;
        case 4:
          if (
            (cellIdStr.match(/[0-6]$/) || cellIdStr.match(/.[0-6]$/)) &&
            !grid[cellIdNum].containsShip
          ) {
            for (let i = 1; i < shipLength; i++) {
              if (grid[cellIdNum + i].containsShip) {
                validPlacement = false;
                break;
              }
              cellPlacements.push(cellIdNum + i);
            }
          } else {
            validPlacement = false;
          }
          break;
        case 3:
          if (
            (cellIdStr.match(/[0-7]$/) || cellIdStr.match(/.[0-7]$/)) &&
            !grid[cellIdNum].containsShip
          ) {
            for (let i = 1; i < shipLength; i++) {
              if (grid[cellIdNum + i].containsShip) {
                validPlacement = false;
                break;
              }
              cellPlacements.push(cellIdNum + i);
            }
          } else {
            validPlacement = false;
          }
          break;
        case 2:
          if (
            (cellIdStr.match(/[0-8]$/) || cellIdStr.match(/.[0-8]$/)) &&
            !grid[cellIdNum].containsShip
          ) {
            for (let i = 1; i < shipLength; i++) {
              if (grid[cellIdNum + i].containsShip) {
                validPlacement = false;
                break;
              }
              cellPlacements.push(cellIdNum + i);
            }
          } else {
            validPlacement = false;
          }
          break;
        default:
          break;
      }
    } else {
      switch (shipLength) {
        case 5:
          if (
            (cellIdStr.match(/^[0-9]$/) || cellIdStr.match(/[1-5].$/)) &&
            !grid[cellIdNum].containsShip
          ) {
            for (let i = 1; i < shipLength; i++) {
              if (grid[cellIdNum + i * 10].containsShip) {
                validPlacement = false;
                break;
              }
              cellPlacements.push(cellIdNum + i * 10);
            }
          } else {
            validPlacement = false;
          }
          break;
        case 4:
          if (
            (cellIdStr.match(/^[0-9]$/) || cellIdStr.match(/[0-6].$/)) &&
            !grid[cellIdNum].containsShip
          ) {
            for (let i = 1; i < shipLength; i++) {
              if (grid[cellIdNum + i * 10].containsShip) {
                validPlacement = false;
                break;
              }
              cellPlacements.push(cellIdNum + i * 10);
            }
          } else {
            validPlacement = false;
          }
          break;
        case 3:
          if (
            (cellIdStr.match(/^[0-9]$/) || cellIdStr.match(/[0-7].$/)) &&
            !grid[cellIdNum].containsShip
          ) {
            for (let i = 1; i < shipLength; i++) {
              if (grid[cellIdNum + i * 10].containsShip) {
                validPlacement = false;
                break;
              }
              cellPlacements.push(cellIdNum + i * 10);
            }
          } else {
            validPlacement = false;
          }
          break;
        case 2:
          if (
            (cellIdStr.match(/^[0-9]$/) || cellIdStr.match(/[0-8].$/)) &&
            !grid[cellIdNum].containsShip
          ) {
            for (let i = 1; i < shipLength; i++) {
              if (grid[cellIdNum + i * 10].containsShip) {
                validPlacement = false;
                break;
              }
              cellPlacements.push(cellIdNum + i * 10);
            }
          } else {
            validPlacement = false;
          }
          break;
        default:
          break;
      }
    }
    return validPlacement ? cellPlacements : false;
  }

export {buildGrid, returnPlacement};
