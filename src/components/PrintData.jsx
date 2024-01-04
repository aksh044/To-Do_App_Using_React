// PrintData.jsx
import React from "react";
// import PropTypes from "prop-types";
import { TiDeleteOutline } from "react-icons/ti";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { ToDoContext } from "../store/ToDoContext";
import { useContext } from "react";

const PrintData = () => {

  const {text}=useContext(ToDoContext);
  const {deletefromlist}=useContext(ToDoContext);

  const toggleClass = (event) => {
    event.target.classList.toggle("checked");
  };
  return (
    <div>
      {text.map((val, index) => (
        <div className="struct" key={index}>
          <div id="list">
            <div className="item">
              <p onClick={toggleClass}>
                <RiCheckboxBlankCircleLine />
                {val}
              </p>
              <span onClick={deletefromlist}>
                <TiDeleteOutline className="custom-icon-delete" />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default PrintData;
