import React from "react";

export default function Content(props){
    return (
    <div className="Content">
        <div className='memeForm'>
            <input type="text" onChange={props.handleChange} name="firstText" value={props.firstText} placeholder='Please enter the first line...'></input>
            <input type="text" onChange={props.handleChange} name="secondText" value={props.secondText} placeholder='Please enter the second line...'></input>
            <button onClick={props.getImage}>Generate New Meme</button>
        

        </div>
        <div className="imageSection">
        <h3 className="FirstText" >{props.firstText}</h3>
        <h3 className="SecondText">{props.secondText}</h3>
        {props.imageURL && <img className="Content-Image" src={props.imageURL}/>}
  
        </div>
    </div>
    );
}