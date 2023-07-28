import React, { useContext } from "react";
import StateContext from "./StateContext";

interface SearchProps{
    searchStr: string,
    onChange:(str:string) =>void
    onClick:(str:string) => void
}
function Search(props:SearchProps){
   // const state = useContext(StateContext)
    return(
        <div className="row">
            <div className="col-md-9">
                <input type="text" className="form-control" placeholder="search"
                value={props.searchStr} onChange={(e) =>props.onChange(e.target.value)}/>
            </div>
            <div className="col-md-3">
               <button type="submit" className="btn btn-primary" onClick={() =>props.onClick(props.searchStr)}>Search</button>
            </div>

        </div>
    )
}
export default Search