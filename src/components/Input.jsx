/* eslint-disable no-unused-vars */
// import React from "react";
import React, { useContext, useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { ToDoContext } from "../store/ToDoContext";

const Input = () => {
  // let [text, settext] = useState("");
  // const {text}=useContext(ToDoContext)
  const {setNewValue}=useContext(ToDoContext)
  const inputref = useRef();

  const addtolist = () => {
    const val = inputref.current.value;
    setNewValue(val);
    inputref.current.value = "";
  };

  const enter = (event) => {
    // console.log(event.key)
    if (event.key === "Enter") {
      addtolist();
    }
  };

  return (
    <div className="inputbox">
      <input type="text" id="input" ref={inputref} onKeyDown={enter} />
      <IoMdAddCircle onClick={addtolist} className="custom-icon-add" />
    </div>
  );
};

export default Input;
