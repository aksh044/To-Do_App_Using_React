import { useReducer, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { ToDoContext } from "./store/ToDoContext";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Heading";
import Heading from "./components/Heading";
import Input from "./components/Input";
import PrintData from "./components/PrintData";

function App() {
  // let [text, settext] = useState([]);
  

  const changevalue=(curtext,action)=>{
    let newtext=curtext;
    if(action.type==="Add_item")
    {
      newtext= [...curtext, action.payload.val];
    }
    else if(action.type==="delete_item"){
      newtext = [...curtext];
      newtext.splice(action.payload.index, 1);
      // newtext=newdata;
    }
    return newtext;
  }

let [text, disapatchText] = useReducer(changevalue, [])

  const setNewValue = (val) => {
    const adddata={
      type : "Add_item",
      payload : {
        val
      },
    }
    disapatchText(adddata);
  };

  const deletefromlist = (index) => {
    const deleteData={
      type : "delete_item",
      payload : {
        index
      },
    }
    disapatchText(deleteData);

    
  };

  return (
    <>
      <ToDoContext.Provider value={{ text, setNewValue, deletefromlist }}>
        <center className="main-container">
          <Heading />
          <Input setNewValue={setNewValue} />

          <div className="data_container">
            <PrintData deletefromlist={deletefromlist} />
          </div>
        </center>
      </ToDoContext.Provider>
    </>
  );
}

export default App;
