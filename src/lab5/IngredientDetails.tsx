import React, { useEffect, useState } from "react";
import useAxios from "axios-hooks";

interface IngredientDetailsProps{
    
    strIngredient: string
}


function IngredientDetails(props:IngredientDetailsProps){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${props.strIngredient}`
    const [description, setDescription] = useState<string>("")
    const [{data, loading, error}, refresh] = useAxios(`${url}`)
   /* useEffect(()=>{
        fetch(url)
        .then(response =>response.json())
        .then(data =>setDescription(data.ingredients[0].strDescription))
        .catch(error => console.log(error))
    },[url])*/
    useEffect(()=>{
        if(data !==undefined)
        setDescription(data.ingredients[0].strDescription)
    },[data])
    
    if(loading) return <p>loading....</p>
    if(error) return <p>error!!!!</p>
    return(
        <div className="ingredient">
            <h3>{props.strIngredient}</h3>
            <p>{description}</p>
        </div>
    )
}
export default IngredientDetails