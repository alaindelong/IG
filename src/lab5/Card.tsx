import React from "react";

interface CardProps{
    id:number,
    imagePath:string,
    title:string,
    description:string,
    ingredient:string[]
    quantity:number[]
}
function Card(props:CardProps){
    return(
        <div className="card">
            <h3>Card</h3>
            <img className="img" src={props.imagePath} alt={props.imagePath}></img>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <ul>
                {props.ingredient.map((i, index) => 
                i!==null && <li key={index}><a href="#">{i}</a><span> </span>{props.quantity[index]}</li>)}
            </ul>
        </div>
    )
}
export default Card