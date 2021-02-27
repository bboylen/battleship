import { useState, useEffect } from "react";
import Header from "./Header";
import Grid from "./Grid";

const Display = () => {
  return (
    <div id="display-container">
      <Header />
      <Grid />
    </div>
  );
};

export default Display;
