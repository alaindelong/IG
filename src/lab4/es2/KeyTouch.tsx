import React, { useEffect } from "react";

interface KeyTouchProps {
  char: string;
  onClick: (char: string) => void;
}

function KeyTouch(props: KeyTouchProps) {
  return (
    <div>
      <div className="KeyTouch" onClick={() => props.onClick(props.char)}>
        <b>{props.char}</b>
      </div>
    </div>
  );
}

export default KeyTouch;
