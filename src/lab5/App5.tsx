import React, { useEffect, useState } from "react";
import useAxios from "axios-hooks";
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
    const [err, setErr] = useState(null);
    const [selected, setSelected] = useState<number[]>([])

     const onChange = (str:string): void =>{
        setSearchStr(str);
     }
     const onClick = () : void =>{
        console.log("search string "+searchStr)
        setUrl(`${prefix}${searchStr}`)
        //setSearchStr("")
     }

     const unSelect = (cardId:number) =>{
      setSelected(selected.filter( el => el !== cardId))
     }

     const select = (cardId:number) =>{
      setSelected([...selected, cardId])
     }

    
 /* useEffect(() => {
    fetch(`${url}`)
      .then((response) => response.json())
      .then((drinks) => {
        setDrinks(drinks.drinks);
        console.log(drinks);
      })
      .catch((error) => setError(error));
  }, [url]);*/
  

  const[{data, loading,error}, refresh] = useAxios(`${url}`)

  useEffect(()=>{
    if(data !== undefined){
      setDrinks(data.drinks)
      console.log("number of card selected "+selected.length)
    }
  },[data, selected])
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
     
    return(
        <div className="container">
            <h1>LAIB 5</h1>
            <Search searchStr={searchStr} onChange={onChange} onClick={onClick}/>
           { err===null? <CardBox drinks={drinks} select={select } unSelect={unSelect}/>:<div> une erreur est survenue {err}</div> }
        </div>
    )
}

export default App5
export type {Drink}