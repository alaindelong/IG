import React from "react"
import { NavLink, Outlet } from "react-router-dom"

function Main(){
return(
    <div style={{display:"flex",flexDirection:"column"}}>
        <h1>Main</h1>
        <div>
            <ul >
                <li><NavLink to={"lab4"}>Laib4</NavLink></li>
                <li><NavLink to={"lab5"}>Laib5</NavLink></li>
                <li><NavLink to={"lab6"}>Laib6</NavLink></li>
                <li><NavLink to={"lab7"}>Laib7</NavLink></li>
            </ul>
        </div>
        <Outlet/>
        <h1>Footer</h1>
    </div>
)
}
export default Main