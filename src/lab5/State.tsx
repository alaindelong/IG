export interface Drink {
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

export interface State{
    searchStr:string,
    url:string,
    drinks: Drink[],
    selected: number[],
   
}

export const initialState:State ={
    searchStr: "",
    url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=",
    drinks: [],
    selected: [],
}

export type Action = 
| {type:'SET_SEARCH_STR', searchStr:string}
| {type:'SEARCH', searchStr:string}
//| {type:'SET_URL'}
| {type:'SET_DRINKS', drinks:Drink[]}
| {type:'SELECT', cardId:number}
| {type:'UNSELECT', cardId:number}
| {type:'RESET_SELECT'}

const prefix = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
export function reducer(state:State, action:Action){
    switch(action.type){
        case 'SET_SEARCH_STR':
            return{...state,searchStr:action.searchStr}
        case 'SEARCH':{
            return{...state,searchStr:action.searchStr,url:`${prefix}${action.searchStr}`}
        }
            
        case 'SET_DRINKS':
            return{...state,drinks:action.drinks} 
        case 'SELECT':
            return{...state,selected:state.selected.filter( el => el !== action.cardId)} 
        case 'UNSELECT':
            return{...state,selected:[...state.selected,action.cardId]} 
        case 'RESET_SELECT':
            return {...state,selected:[]}   
        default:
            return state          
    }
}