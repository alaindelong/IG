import React, { useEffect, useReducer, useState } from "react";
import useAxios from "axios-hooks";
import Search from "./Search";
import CardBox from "./CardBox";
import { Drink, State, initialState, reducer } from "./State";
import StateContext from "./StateContext";
import SelectContext from "./SelectContext";



function App5(){
    const prefix = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    const [searchStr, setSearchStr] = useState("")
    const [url, setUrl] = useState(prefix)
    const [drinks, setDrinks] = useState<Drink[]>([]);
    const [err, setErr] = useState(null);
    const [selected, setSelected] = useState<number[]>([])
    //const [state, setState] = useState<State>(initialState)
    const [state,dispatch] = useReducer(reducer,initialState)
    
    

     const onChange = (str:string): void =>{
       // setSearchStr(str);
        //setState({...state, searchStr:str})
        dispatch({type:'SET_SEARCH_STR',searchStr:str})
     }
     const onSearch = (str:string) : void =>{
        console.log("search string "+str)
       // onChange(str)
       // setUrl(`${prefix}${searchStr}`)
        //setSearchStr("")
       // setState({...state,searchStr:str,url:`${prefix}${searchStr}`})
       dispatch({type:'SEARCH',searchStr:str})
       console.log("url "+state.url)
     }

     const unSelect = (cardId:number) =>{
      //setSelected(selected.filter( el => el !== cardId))
      //setState({...state,selected:selected.filter( el => el !== cardId)})
      dispatch({type:'UNSELECT',cardId})
     }

     const select = (cardId:number) =>{
      //setSelected([...selected, cardId])
      //setState({...state,selected:[...selected,cardId]})
      dispatch({type:'SELECT',cardId})
     }
     const [selectContext,setSelectContext] = useState({select,unSelect})
     
 /* useEffect(() => {
    fetch(`${url}`)
      .then((response) => response.json())
      .then((drinks) => {
        setDrinks(drinks.drinks);
        console.log(drinks);
      })
      .catch((error) => setError(error));
  }, [url]);*/
  

  const[{data, loading,error}, refresh] = useAxios(`${state.url}`)

  useEffect(()=>{
    if(data !== undefined){
      //setDrinks(data.drinks)
      //setState({...state,drinks:data.drinks})
      dispatch({type:'SET_DRINKS',drinks:data.drinks})
      dispatch({type:'RESET_SELECT'})
    //  console.log("number of card selected "+state.selected.length)
    }
  },[data,state.url])
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
     
    return( 
      <StateContext.Provider value={state}>
        <div className="container">
            <h1>LAIB 5</h1>
            <h5>selected {state.selected.length}</h5>
            <Search searchStr={state.searchStr} onChange={onChange} onClick={onSearch}/>
            <SelectContext.Provider value={selectContext}>
           { err===null? <CardBox select={select} unSelect={unSelect} />:<div> une erreur est survenue {err}</div> }
           </SelectContext.Provider>
        </div>
      </StateContext.Provider>  
    )
}

export default App5
export type {Drink}