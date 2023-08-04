import React from "react"
import { NavLink, Outlet } from "react-router-dom"

function Main(){
return(
    <div className="container">
        <div className="row">
            <h1>Main</h1>
        </div>
        
        <div className="row">
            <div className="col">
            <ul className="d-flex flex-row">
                <li className="col-xs-12 col-sm-3"><NavLink to={"lab4"}>Laib4</NavLink></li>
                <li className="col-xs-12 col-sm-3"><NavLink to={"lab5"}>Laib5</NavLink></li>
                <li className="col-xs-12 col-sm-3"><NavLink to={"lab6"}>Laib6</NavLink></li>
                <li className="col-xs-12 col-sm-3"><NavLink to={"lab7"}>Laib7</NavLink></li>
            </ul>
            </div>
            
        </div>
        <div className="row" style={{backgroundColor:"#d8d0d0"}}>
            <Outlet/>
        </div>
        <div className="row">
            <h1>Footer</h1>
        </div>
    </div>
)
}
export default Main