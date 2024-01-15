import React from "react";
import DragText from "./DragText";

export default function Content(props){
    const [numberText, setNumberText]=React.useState([1,2]);
    const [curr, setCurr]=React.useState(0);
    const [textSize, setTextSize]=React.useState(2);
    const[positionArray, setPositionArray]=React.useState([{x:0,y:0},{x:0,y:0}])
    const [formData, setFormData]=React.useState({
        text1: "",
        text2: ""
    })
    const handlePositionDrag=(position, id)=>{
        setPositionArray((prev)=>{
            prev[id]=position
            return prev;
        })
    }
    const dragElement=Object.values(formData).map(el=>{ 
        return <DragText key={el+Math.random()} text={el} textSize={textSize} position={positionArray[Object.values(formData).findIndex(a=>a===el)]} handlePositionDrag={handlePositionDrag} id={Object.values(formData).findIndex(a=>a===el)}/>
    })
    const handleChange=(e)=>{
        const {name, value}=e.target;
        setFormData(prev=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }
    let inputElement=numberText.map(el=><input key={el} type="text" onChange={handleChange} name={`text${el}`} placeholder="Please enter something..." value={formData[`text${el}`]}/>)
    const handleAdd=()=>{
       if(numberText.length<9){
        setNumberText(prev=>{
            prev.push(prev[prev.length-1]+1);
            return prev;
        });
        setCurr(prev=>prev+1);
        setFormData(prev=>{
            return {
                ...prev,
                [`text${numberText.length}`]:""
            }
        });
        setPositionArray(prev=>{
            return[...prev, {x:0, y:0}]
        })
        }
    }
    const handleFontSize=(e)=>{
        const {value}=e.target
        if(value>=1 && value<10) setTextSize(value)
    }
const handleMinus = () => {
    if (numberText.length > 2) {
        setNumberText(prev => {
            prev.pop();
            return prev;
        });
        setCurr(prev => prev - 1);
        setFormData(prev => {
            delete prev[`text${numberText.length + 1}`];
            return prev;
        });
        setPositionArray(prev => {
            return prev.slice(0, -1);
        });
    }
};
    return (
    <div className="container-fluid" style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    }}>
        
        <div className='memeForm'>
        <div style={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"center", marginTop:"40px", alignItems:"center"}}>
        <h4>Number of line (minimum is 2, maximum is 9):</h4>
        <div style={{display:"flex", flexDirection:"row", gap:"65px", justifyContent:"center", alignItems:"center", width:"100%"}}>
            
                <div onClick={handleMinus} style={{
                    backgroundColor:"transparent",
                    cursor:"pointer",
                    fontSize:"2rem"
                    
                }}><i className="fa-solid fa-minus"></i></div>
                <h3>{numberText.length}</h3>
                <div onClick={handleAdd} style={{
                    backgroundColor:"transparent",
                    cursor:"pointer",
                    fontSize:"1.8rem"
                    
                }}><i className="fa-solid fa-add"></i></div>

            </div>
            </div>
            <div style={{
                display:"flex",
                flexDirection:"row",
                gap:"10px",
                justifyContent:"center",
                alignItems:"center"
            }}>
                <h4>Font Size (min value is 1 and max value is 9):</h4>
                <input type="number" onChange={handleFontSize} value={textSize} style={{width:"150px", fontSize:"1.5rem", textAlign:"center"}}/>
                <h4>rem</h4>
            </div>
            {inputElement}
            <button onClick={props.getImage}>Generate New Meme</button>

        </div>
        <div className="imageSection">
        {dragElement}
        {props.imageURL && <img className="Content-Image" src={props.imageURL} alt="a generated meme"/>}
  
        </div>
    </div>
    );
}