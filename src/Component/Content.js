import React from "react";

export default function Content(props){
    return (
    <div>
    <div className='memeForm'>
        <input placeholder='Please enter the first line...'></input>
        <input placeholder='Please enter the second line...'></input>
        <button>Generate New Meme</button>
      

    </div>
          {props.imageURL && <img src={props.imageURL}/>}
    </div>
    );
}