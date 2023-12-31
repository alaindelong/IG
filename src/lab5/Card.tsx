import React, { useContext, useReducer, useState } from "react";
import IngredientDetails from "./IngredientDetails";
import SelectContext from "./SelectContext";

interface CardProps {
  id: number;
  imagePath: string;
  title: string;
  description: string;
  ingredient: string[];
  quantity: number[];
  /* select: (id: number) => void;
  unSelect: (id: number) => void;*/
}

function Card(props: CardProps) {
  const [selected, setSelected] = useState(false);
  const [strIngredient, setStrIngredient] = useState("");
  const color = selected ? "blue" : "";
  const [show, setShow] = useState(false);

  //to avoid passing props fonction
  const selec = useContext(SelectContext);
  return (
    <div className="card5" style={{ borderColor: color }}>
      <div
        onClick={() => {
          setSelected(!selected);
          if (!selected) selec.unSelect(props.id); //props.select(props.id)
          if (selected) selec.select(props.id); //props.unSelect(props.id)
        }}
      >
        <h3>Card</h3>
        <img className="img" src={props.imagePath} alt={props.imagePath}></img>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
      <div>
        <ul>
          {props.ingredient.map(
            (i, index) =>
              i !== null && (
                <li
                  key={index}
                  className="clickable"
                  onClick={() => {
                    console.log(`element ${i} clicked`);
                    setStrIngredient(i);
                    setShow(!show);
                  }}
                >
                  <span>{i}</span>
                  <span> </span>
                  {props.quantity[index]}
                </li>
              )
          )}
        </ul>
      </div>
      <div className="card-body">{show && <IngredientDetails strIngredient={strIngredient} />}</div>
    </div>
  
  );
}
export default Card;
