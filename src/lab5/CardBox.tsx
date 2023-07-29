import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { Drink } from "./App5";
import IngredientDetails from "./IngredientDetails";
import StateContext from "./StateContext";


interface CardBoxProps{
  /*  drinks:Drink[],*/
    select: (id:number) =>void
    unSelect: (id:number) =>void
}

function CardBox( props: CardBoxProps) {
  const state = useContext(StateContext)
  return (
    <div className="row">
      <h1>CardBox</h1>
      <ul>
        { state.drinks!==undefined && state.drinks!==null? state.drinks.map((drink) => (
           <Card key={parseInt(drink.idDrink)}
          id={parseInt(drink.idDrink)}
          imagePath={drink.strDrinkThumb}
          title={drink.strDrink}
          description={drink.strInstructions}
          ingredient={[drink.strIngredient1, drink.strIngredient2,
          drink.strIngredient3, drink.strIngredient4, drink.strIngredient5]}
          quantity={[drink.strMeasure1, drink.strMeasure2, drink.strMeasure3,
          drink.strMeasure4, drink.strMeasure5]} /> 
                
               
        )):<div>{"nothing found"}</div>}
      </ul>
    </div>
  );
}
export default CardBox;
