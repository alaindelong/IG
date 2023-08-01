import React, { useEffect, useReducer, useState } from "react";
import { Measure, initialState, reducer } from "./State";

interface CardProps{
    id:string,
    label:string,
    lat:number,
    lon:number,
    onshowCard:()=>void
}
function Card(props:CardProps){
    const url = `https://environment.data.gov.uk/flood-monitoring/id/stations/${props.id}/measures`
    const [measures, setMeasures] = useState<Measure[]>([])
    const [state, dispatch] = useReducer(reducer,initialState)
    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(data =>{
          //setMeasures(data.items)
          dispatch({type:'SET_MEASURES',measures:data.items})
          console.log(" length after fecth click"+data.items.length)
          
        })
        .catch(error =>console.log("an error occurs "+error))
    },[url])
    
    return(
        <div className="card6">
            <h5><strong>{props.label}</strong></h5>
            <p><strong>Station Id: {props.id}</strong></p>
            <p><strong>Lat: {props.lat}</strong></p>
            <p><strong>Lon: {props.lon}</strong> <i className="bi bi-cloud-rain"></i></p>
            <table className="table table-primary">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Parameter</th>
                        <th scope="col">LR date</th>
                        <th scope="col">LR Time</th>
                        <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                   {
                     state.measures.map((el,index) =>el.latestReading &&<tr key={index}>
                        <th scope="row">{index}</th>
                        <td>{el.parameter}</td>
                        <td>{el.latestReading.date}</td>
                        <td>{el.latestReading.dateTime}</td>
                        <td>{el.latestReading.value}{el.unitName}</td> 
                     </tr>)
                   } 
                </tbody>
            </table>
           { /*<ul>
               {
                
                state.measures.map((el,index) =><li key={index}>
                    { el.latestReading!==undefined? <p>{el.parameter} {el.latestReading.date} 
                    {el.latestReading.dateTime} {el.latestReading.value}</p>:<p>{el.parameter}</p>
                    }
                </li>)
               }
            </ul>*/}
            
          <div style={{display:"flex",justifyContent:"center"}}>  
            <button className="mybtn"  type="button" onClick={props.onshowCard}>X</button>
          </div>
        </div>
    )
}
export default Card