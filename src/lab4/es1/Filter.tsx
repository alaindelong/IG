import React, { useEffect, useState } from "react";

interface FilterProps {
  onFilter: (str: string) => void;
}

function Filter({ onFilter }: FilterProps) {
  const [filter, setFilter] = useState("");
  //useEffect(()=>{},[filter])
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="input-group">
        <input
          className="form-control"
          type="text"
          placeholder="filter"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            onFilter(filter);
          }}
        ></input>
        </div>
      </div>
      <h2>{filter}</h2>
    </div>
  );
}
export default Filter;
