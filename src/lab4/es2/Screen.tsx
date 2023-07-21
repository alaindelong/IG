import React from "react";

interface ScreenProps {
  digitedStr: string;
  onDelete: () => void;
  onChange: () => void;
}

function Screen(props: ScreenProps) {
  return (
    <div className="row">
      <div className="col-md-10">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            value={props.digitedStr}
            onChange={props.onChange}
          />
        </div>
      </div>
      <div className="col-md-2">
        <div className="input-group">
          <button className="btn btn-primary" onClick={props.onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Screen;
