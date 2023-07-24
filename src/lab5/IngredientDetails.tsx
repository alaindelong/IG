import React, { useEffect, useState } from "react";

interface IngredientDetailsProps{
    
    strIngredient: string
}


function IngredientDetails(props:IngredientDetailsProps){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${props.strIngredient}`
    const [description, setDescription] = useState<string>("")
    useEffect(()=>{
        fetch(url)
        .then(response =>response.json())
        .then(data =>setDescription(data.ingredients[0].strDescription))
        .catch(error => console.log(error))
    },[url])
    return(
        <div className="ingredient">
            <h3>{props.strIngredient}</h3>
            <p>{description}</p>
        </div>
    )
}
export default IngredientDetails