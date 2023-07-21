import React, { useEffect, useState } from "react";


function onSearch(str:string): void  {
    console.log("searched string "+str)
}

interface InpupFieldsProps{
    onInsert:(str:string) => void,
    checkItem:(str:string) => boolean
}

function Search({onInsert, checkItem}:InpupFieldsProps) {
    const [searchStr, setSearchStr] = useState("")
    useEffect(()=>{},[searchStr])
  return (
    <div className="row">
      <h2> search</h2>
      <div className="col-md-6">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="insert ISBN"
            value={searchStr}
            onChange={(e) =>{setSearchStr(e.target.value)}}
          ></input>
        </div>
      </div>
      <div className="col-md-2">
        <div className="input-group">
          <span>
            <button className="btn btn-primary" type="button" onClick={() =>{
                if(checkItem(searchStr))
                {  onInsert(searchStr)
                    console.log("code does not exist, adding new code")
                    setSearchStr("")
                }else{
                    console.log("il codice existe")
                    setSearchStr("")
                }
                }}>
              Submit
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Search;
