
export interface Measure{
    id:string,
    label:string,
    latestReading:{
      id:string,
      date:string,
      dateTime:string,
      measure:string,
      value:number
    },
    parameter:string,
    stationReference:string,
    unitName:string
  }



export interface State{
    id: string,
    label: string,
    latt: number,
    long: number,
    show:boolean,
    measures:Measure[], // for a given station after markers appear
    items:any[] // items of markers after we click on a point of the map
}

export const initialState:State ={
    id: "",
    label: "",
    latt: 54.5445,
    long: -4.0649,
    show: false,
    measures: [],
    items: []
}

export type Action = 
    | { type:'SET_POSITION',latt:number,long:number}
    | {type:'SET_ITEMS',items:any[]}
    | {type:'SET_MEASURES',measures:Measure[]}
    | {type:'ON_SHOW_CARD',id:string,label:string,latt:number,long:number}
    | {type:'ON_CLOSE_CARD'}

export function reducer(state:State,action:Action){
    switch(action.type){
        case 'SET_POSITION':
            return {...state,latt:action.latt,long:action.long}
        case 'SET_ITEMS':
            return {...state,items:action.items}   
        case 'SET_MEASURES':
            return {...state,measures:action.measures}    
        case 'ON_SHOW_CARD':
            return {...state,id:action.id,label:action.label,latt:action.latt,long:action.long,show:true}   
        case 'ON_CLOSE_CARD':
            return {...state,show:false}   
        default:
            return state      
    }
}    

