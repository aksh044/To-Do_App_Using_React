// PrintData.jsx
import React from "react";
import PropTypes from "prop-types";

const PrintData = ({ text ,deletefromlist}) => {
    const toggleClass=(event)=>{
        event.target.classList.toggle("checked")
    }
  return (
    <div>
      {text.map((val, index) => (
        <div className="struct" key={index}>
          <div id="list">
            <div className="item">
              <p onClick={toggleClass}>{val}</p>
              <span onClick={deletefromlist}>&times;</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

PrintData.propTypes = {
  text: PropTypes.array.isRequired,
};

export default PrintData;
