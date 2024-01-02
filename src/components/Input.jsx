/* eslint-disable no-unused-vars */
// import React from "react";
import React, { useState } from "react";

const Input = ({ setNewValue }) => {
  let [text, settext] = useState("");

  const addtolist = () => {
    setNewValue(text);
    settext("");
  };

  const valueChanged = (event) => {
    settext(event.target.value);
  };

 const enter=(event)=>{
// console.log(event.key)
if(event.key==="Enter"){
  addtolist()
}

}

  return (
    <div className="inputbox">
      <input type="text" id="input" value={text} onChange={valueChanged} onKeyDown={enter}/>
      <button id="add" onClick={addtolist} placeholder="hi">
        ADD
      </button>
    </div>
  );
};

export default Input;
