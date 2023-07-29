import { createContext } from "react";

const SelectContext = createContext({
    select:(id:number) =>{},
    unSelect:(id:number) =>{}
})

export default SelectContext