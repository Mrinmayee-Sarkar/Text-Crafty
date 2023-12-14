import PageInterface from "./Screen/PageInterface"
import StateEg from "./Screen/StateEg";
import About from "./Screen/About";
import { useState } from "react";
import Alert from "./Screen/Alert";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";


function App() {
  const[color,setColor]=useState("light")
  const[text,setText]=useState("Enable Dark Mode")
  const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
   setAlert({
    message:message,
    type:type
   })
   setTimeout(() => {
    setAlert(null)
    }, 1500);
  }

  const handleSwitch=()=>{
    if (color==="light"){
      setColor("dark")
      setText("Enable Light Mode")
      showAlert("Dark Mode Activated","success")
      document.body.style.backgroundColor="#042743"
    
   }
    else{
      setColor("light")
      setText("Enable Dark Mode")
      showAlert("Light Mode Activated","success")
      document.body.style.backgroundColor="white"
    }
  }

return (
    <>
      <Router>
     
      <PageInterface 
      title="TextCraftify"  
      heading="Home" 
      heading1="About" 
      colors={color} 
      texts={text} 
      handleSwitch={handleSwitch}
      />
      
      <Alert alert={alert}/>
      <div className="container my-5">
     <Routes>
        <Route element={<About colors={color}/>} path="/about"></Route>
        <Route element={<StateEg heading="Enter the text to analyze" colors={color} showAlert={showAlert} />} path="/stateeg">
        </Route> 
  </Routes>
        </div>
   
    </Router>
    </>
  )
    
 
}

export default App;
