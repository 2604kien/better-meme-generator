import React from "react";
import Draggable from "react-draggable";

export default function Content(props){
    const [numberText, setNumberText]=React.useState([1,2]);
    const [curr, setCurr]=React.useState(0);
    const [formData, setFormData]=React.useState({
        text1: "",
        text2:""
    })
    const a=1
    let inputElement=numberText.map(el=><input key={Math.random()*1000} type="text" onChange={props.handleChange} name={`text${el}`} placeholder="Please enter something..." value={formData[`text${el}`]}/>)
    console.log(formData);
    const handleAdd=()=>{
       
        setNumberText(prev=>{
            prev.push(prev[prev.length-1]+1);
            return prev;
        });
        setCurr(prev=>prev+1);
        setFormData(prev=>{
            return [
                ...prev,
                {[`text${prev.length+1}`]:""}
            ]
        })
        
    }
    const handleMinus=()=>{
        if(numberText.length>2){
            setNumberText(prev=>{
                prev.pop();
                return prev;
            })
            setCurr(prev=>prev-1);
        }
    }
    return (
    <div className="container-fluid border" style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    }}>
        
        <div className='memeForm'>
        <div style={{display:"flex", flexDirection:"row", gap:"5px", justifyContent:"center", alignItems:"center", marginTop:"80px", gap:"20px", width:"100%", height:"3rem"}}>
            <h3>Number of line:</h3>
                <button onClick={handleMinus} style={{
                    width:"30px",
                    height:"30px"
                }}>-</button>
                <h3>{numberText.length}</h3>
                <button onClick={handleAdd} style={{
                    width:"30px",
                    height:"30px"
                }}>+</button>

            </div>
                {inputElement}
            <button onClick={props.getImage}>Generate New Meme</button>

        </div>
        <div className="imageSection">
      
        {props.imageURL && <img className="Content-Image" src={props.imageURL}/>}
  
        </div>
    </div>
    );
}