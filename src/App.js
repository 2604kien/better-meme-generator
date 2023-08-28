import './App.css';
import React from 'react';
import Nav from "./Component/Nav";
import Content from "./Component/Content";
//api url=https://api.imgflip.com/get_memes
function App() {
  const [formData, setFormData]=React.useState({
    firstText:"",
    secondText:"",
    imageURL:"http://i.imgflip.com/1bij.jpg"
  });
  const [memeData, setMemeData]= React.useState([]);
  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=>setMemeData(data.data.memes));
  }, []);
  return (
    <div className="App">
      <Nav />
      <Content imageURL={formData.imageURL}/>
      </div>
  );
}

export default App;
