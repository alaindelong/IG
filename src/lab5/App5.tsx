import React, { useState } from "react";
import Search from "./Search";
import CardBox from "./CardBox";


function App5(){
    const prefix = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    const [searchStr, setSearchStr] = useState("")
    const [url, setUrl] = useState(prefix)
     const onChange = (str:string): void =>{
        setSearchStr(str);
     }
     const onClick = () : void =>{
        console.log("search string "+searchStr)
        setUrl(`${prefix}${searchStr}`)
        //setSearchStr("")
     }
     
    return(
        <div className="container">
            <h1>LAIB 5</h1>
            <Search searchStr={searchStr} onChange={onChange} onClick={onClick}/>
            <CardBox url={url}/>
        </div>
    )
}

export default App5