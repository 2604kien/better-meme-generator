
import React from 'react';

import icon from "../Images/doge-meme-icon-free-vector.jpg"
export default function Nav(){
    return(
        <nav className='App-nav'>
      <img className="App-nav-icon" src={icon}/>
      <h2>Meme Generator</h2>
      </nav>
    );
}