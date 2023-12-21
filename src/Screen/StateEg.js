import { useState } from "react";

export default function StateEg(props){
   
    const [text,setText]=useState("")

  const handleExtraspaces=()=>{
  let a=(text.split(/[ ]+/).join(' '))
  setText(a)
  props.showAlert("Extra Spaces has removed","success")
}
    
    const handleCopy = () => {
      navigator.clipboard.writeText(text)
      props.showAlert("Text has Copied to the Clipboard","success")}

    const handleUpper=()=>{
        setText(text.toUpperCase())
        props.showAlert("Converted to uppercase","success")}

    const handleloLower=()=>{
            setText(text.toLowerCase())
            props.showAlert("Converted to Lower Case","success")}

    const handleClear=()=>{
      setText("")
      props.showAlert("Text has cleared","success")
    }

    const handleSimple=()=>{
      let a=(text[0].toUpperCase().concat(text.slice(1, )))
      setText(a)
      props.showAlert("Converted to Sentance Case","success")
    }

    const handleReverse=()=>{
      let a=(text.split('').reverse().join(''))
      console.log(a)
      setText(a)
      props.showAlert("Text has Reversed","success")
    }

    let alphachar=text.split("").filter(value =>( (value >= "A" && value<="Z")||(value >= "a" && value<="z"))&&(value!=="")).length
  
  return(<>
    <div style={{color:props.colors==="dark"?"white":"black"}}>
        <div className="container"  >
        <h2>{props.heading}</h2>
    <div className="mb-3">
  <textarea className="form-control" placeholder="Type Something" id="myBox" rows="8"
   onChange={(event)=>setText(event.target.value)} value={text} style={{backgroundColor: props.colors==="dark"?"#13466e":"white", color:props.colors==="dark"?"white":"black"}} ></textarea> </div>
  <button disabled={text.length===0} type="button"  className="btn btn-primary mx-4 my-1" onClick={handleUpper}>Upper case</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-4 my-1" onClick={handleloLower}> Lower case</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-4 my-1" onClick={handleSimple}>Sentence Case</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-4 my-1" onClick={handleReverse}>Reverse Case</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-4 my-1" onClick={handleExtraspaces}>Remove Extra Spaces</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-4 my-1" onClick={handleCopy}>Copy Text</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-4" onClick={handleClear}>Clear Text</button> </div>
  
  <div className="container my-3">
    <h2>Text Analysis</h2>
    <b >Total Words: {text.split(' ').filter(value => value !== "").length}  Total Characters: {text.trim().length}  No. of Alphabetic Characters: {alphachar} </b><br></br><br></br>
    
    <h2>Preview</h2>
    <p>{text.length===0?"Type something above to preview here":text}</p>
    <b>{0.008*text.split(' ').filter(value => value !== "").length} minutes to read</b>


    </div>
   </div>
  </>
)}