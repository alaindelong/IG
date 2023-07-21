import React, { useEffect, useState } from "react";
import Card from "./Card";

interface Drink {
  idDrink: string;
  strDrink: string;
  strInstructions: string;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strMeasure1:number;
  strMeasure2:number;
  strMeasure3:number;
  strMeasure4:number;
  strMeasure5:number;
}

interface CardBoxProps{
    url:string
}

function CardBox( props: CardBoxProps) {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`${props.url}`)
      .then((response) => response.json())
      .then((drinks) => {
        setDrinks(drinks.drinks);
        console.log(drinks);
      })
      .catch((error) => setError(error));
  }, [props.url]);
  return (
    <div className="row">
      <h1>CardBox</h1>
      <ul>
        { drinks!==undefined && drinks!==null? drinks.map((drink) => (
          <Card key={parseInt(drink.idDrink)}
            id={parseInt(drink.idDrink)}
            imagePath={drink.strDrinkThumb}
            title={drink.strDrink}
            description={drink.strInstructions}
            ingredient={[drink.strIngredient1, drink.strIngredient2,
            drink.strIngredient3, drink.strIngredient4, drink.strIngredient5]} 
            quantity={[drink.strMeasure1,drink.strMeasure2,drink.strMeasure3,
                drink.strMeasure4,drink.strMeasure5]}/>
        )):<div>{"nothing found"}</div>}
      </ul>
    </div>
  );
}
export default CardBox;
