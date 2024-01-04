import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Heading";
import Heading from "./components/Heading";
import Input from "./components/Input";
import PrintData from "./components/PrintData";


function App() {
  let [text, settext] = useState([]);

const setNewValue=(val)=>{
  settext((current)=>[
    ...current,
    val
  ])
}

const deletefromlist=(index)=>{
  const newdata= [...text]
  newdata.splice(index,1)
  settext(newdata);
}

  return (
    <>
      <center className="main-container">
        <Heading />
        <Input text={text} setNewValue={setNewValue}/>
        
        <div className="data_container">
          <PrintData text={text} deletefromlist={deletefromlist}/>
        </div> 
      </center>
    </>
  );
}

export default App;
