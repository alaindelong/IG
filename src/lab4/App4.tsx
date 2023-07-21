import React from "react";
import ColorBox from "./es3/ColorBox";
import Keyboard from "./es2/Keyboard";
import Box from "./es1/Box";

function App4() {
  return (
    <div className="container">
      <h1> LAIB 4 </h1>
      {<Box />}
      {<Keyboard />}
      <ColorBox />
    </div>
  );
}
export default App4;
