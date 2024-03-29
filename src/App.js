import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React from 'react';
import Nav from "./Component/Nav";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Content from "./Component/Content";
import Footer from "./Component/Footer"
//api url=https://api.imgflip.com/get_memes
function App() {
  const [formData, setFormData]=React.useState({
    imageURL:""
  });
  const [memeData, setMemeData]= React.useState([]);
  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=>setMemeData(data.data.memes));
  }, []);
  function handleChange(event){
    const{name, value}=event.target;
    setFormData((prev)=>{
      return{
        ...prev,
        [name]: value
      }
    });
  }
  function getImage(){
    let i=Math.floor(Math.random()*memeData.length);
    setFormData((prev)=>{
      return {
        ...prev,
        imageURL: memeData[i].url
      }
    });
  }
  return (
    <div className="App">
      <Nav />
      <Content getImage={getImage} handleChange={handleChange} firstText={formData.firstText} secondText={formData.secondText} imageURL={formData.imageURL}/>
      <Footer/>
      </div>
  );
}

export default App;
