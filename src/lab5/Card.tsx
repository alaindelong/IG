import React, { useState } from "react";
import IngredientDetails from "./IngredientDetails";

interface CardProps{
    id:number,
    imagePath:string,
    title:string,
    description:string,
    ingredient:string[]
    quantity:number[]
}

function Card(props:CardProps){
    const [selected, setSelected] = useState(false)
    const [strIngredient, setStrIngredient] = useState("")
    const color = selected?"blue":""
    const [show, setShow] = useState(false)
    return(
        <div className="card5" style={{borderColor:color}} onClick={() => setSelected(!selected)}>
            <h3>Card</h3>
            <img className="img" src={props.imagePath} alt={props.imagePath}></img>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <ul>
                {props.ingredient.map((i, index) => 
                i!==null && <li key={index} className="clickable"
                onClick={() => {console.log(`element ${i} clicked`);setStrIngredient(i);setShow(true)}}
                ><span>{i}</span><span> </span>{props.quantity[index]}</li>)}
            </ul>
            { show && <IngredientDetails strIngredient={strIngredient}/>}
        </div>
    )
}
export default Card