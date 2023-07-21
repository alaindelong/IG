import React, { useState } from "react";
import Card from "./Card";
import Slider from "./Slider";

function ColorBox(){
    const [hue, setHue] = useState(33)
    const [sat, setSat] = useState(10)
    const [lig, setLig] = useState(10)
    
    const onChangeHue = (hue:number) =>{
        console.log("hue changed!" + hue)
        setHue(hue)
    }
    const onChangeSat = (sat:number) =>{
        console.log("sat changed!" + sat)
        setSat(sat)
    }
    const onChangeLig = (lig:number) =>{
        console.log("lig changed!" + lig)
        setLig(lig)
    }
    const colorToHex = (color:number) =>{
        let hex = color.toString(16)
      return hex.length === 1?"0"+hex : hex
    }

    const rgbToHex = (r:number,g:number,b:number) =>{
        return "#"+colorToHex(r)+colorToHex(g)+colorToHex(b)
    }
    return(
        <div>
            <h2>esercizio 3</h2>
            <h3>Hue: {hue}</h3>
           <Slider min={0} max={360} currentValue={hue} onChange={onChangeHue}/>
           <h3>Saturation: {sat}</h3>
           <Slider min={0} max={100} currentValue={sat} onChange={onChangeSat}/>
           <h3>Lightness: {lig}</h3>
           <Slider min={0} max={100} currentValue={lig} onChange={onChangeLig}/>
           <Card hue={hue} saturation={sat} lightness={lig} rgbToHex={rgbToHex}/>
        </div>
    )
}
export default ColorBox;