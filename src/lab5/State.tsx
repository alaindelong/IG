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
    selected: number[]
}

export const initialState:State ={
    searchStr: "",
    url: "",
    drinks: [],
    selected: []
}

export type Action = 
| {type:'SEARCH', searchStr:string}
//| {type:'SET_URL'}
| {type:'SET_DRINKS', drinks:Drink[]}
| {type:'SELECT', cardId:number}
| {type:'UNSELECT', cardId:number}