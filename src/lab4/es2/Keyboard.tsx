import React, { useState } from "react";
import Screen from "./Screen";
import KeyRow from "./KeyRow";

const keys = ["qwertyuiop", "asdfghjkl", "zxcvbnm,"];

const onChange = (): void => {
  console.log("on changed");
};

function Keyboard() {
  const [digitedStr, setDigitedStr] = useState("");
  const onClick = (char: string): void => {
    console.log(char);
    setDigitedStr(digitedStr.concat(char));
    console.log(digitedStr);
  };
  const onDelete = (): void => {
    console.log("delete!");
    if (digitedStr !== "")
      setDigitedStr(digitedStr.substring(0, digitedStr.length - 1));
  };

  return (
    <div className="row">
      <h2>esercizio 2</h2>
      <div className="col-md-12">
        <Screen
          digitedStr={digitedStr}
          onDelete={onDelete}
          onChange={onChange}
        />
      </div>
      <div className="col-md-12">
        <KeyRow keys={keys} onClick={onClick} />
      </div>
    </div>
  );
}
export default Keyboard;
