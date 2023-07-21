import React from "react";

interface SliderProps{
    min: number,
    max: number,
    currentValue: number,
    onChange:(hue:number)=>void
}
function Slider (props:SliderProps){
    return (
        <div >
           <input className="slider" type="range" min={props.min} max={props.max} value={props.currentValue}
           onChange={(e) =>{props.onChange(e.target.valueAsNumber)}}/>
        </div>
    )
}
export default Slider;