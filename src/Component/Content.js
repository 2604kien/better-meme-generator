import React from "react";
import Draggable from "react-draggable";

export default function Content(props){
    return (
    <div className="Content">
        <div className='memeForm'>
            <input type="text" onChange={props.handleChange} name="firstText" value={props.firstText} placeholder='Please enter the first line...'></input>
            <input type="text" onChange={props.handleChange} name="secondText" value={props.secondText} placeholder='Please enter the second line...'></input>
            <button onClick={props.getImage}>Generate New Meme</button>
        

        </div>
        <div className="imageSection">
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
        <Draggable
        axis="both"
        handle=".SecondText"
        bounds="parent"
        defaultPosition={{x: 0, y: 270}}
        position={null}
        grid={[1, 1]}
        scale={1}>  
        <h3 className="SecondText">{props.secondText}</h3>
        </Draggable>  
        {props.imageURL && <img className="Content-Image" src={props.imageURL}/>}
  
        </div>
    </div>
    );
}