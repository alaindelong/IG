import React from "react";
import KeyTouch from "./KeyTouch";

interface KeyRowProps{
    keys: string[]
    onClick:(char: string) => void
}

function KeyRow(props:KeyRowProps){
    return (
        <div className="container">
            <div className="row">
                {
                    props.keys.map((str, index) =>{
                        return (
                        <div className="row" key={index} style={{marginLeft:`${index}em`,marginRight:`${index}em`,alignContent:"center"}}>{
                          str.split("").map((char, index) =>{
                            return(
                                <div className="col-md-1 keydiv" key={index}>
                                   <KeyTouch char={char} onClick={props.onClick}/>
                                </div>
                            )
                          })}
                        </div>)   
                    })
                }
            </div>
        </div>
    )
}
export default KeyRow;