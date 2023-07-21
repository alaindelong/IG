import React, { useEffect, useState } from "react";
import Search from "./Search";
import CardBox from "./CardBox";
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


function App5(){
    const prefix = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    const [searchStr, setSearchStr] = useState("")
    const [url, setUrl] = useState(prefix)
    const [drinks, setDrinks] = useState<Drink[]>([]);
    const [error, setError] = useState(null);

     const onChange = (str:string): void =>{
        setSearchStr(str);
     }
     const onClick = () : void =>{
        console.log("search string "+searchStr)
        setUrl(`${prefix}${searchStr}`)
        //setSearchStr("")
     }

    
  useEffect(() => {
    fetch(`${url}`)
      .then((response) => response.json())
      .then((drinks) => {
        setDrinks(drinks.drinks);
        console.log(drinks);
      })
      .catch((error) => setError(error));
  }, [url]);
     
    return(
        <div className="container">
            <h1>LAIB 5</h1>
            <Search searchStr={searchStr} onChange={onChange} onClick={onClick}/>
           { error===null? <CardBox drinks={drinks}/>:<div> une erreur est survenue {error}</div> }
        </div>
    )
}

export default App5
export type {Drink}