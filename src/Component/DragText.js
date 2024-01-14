import React from "react";
import Draggable from "react-draggable";
export default function DragText(){
    return(
        <Draggable
        axis="both"
        handle=".FirstText"
        bounds="parent"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[1, 1]}
        scale={1}>
        <h3 className="FirstText" >{props.firstText}</h3>
        </Draggable>  
    )
}