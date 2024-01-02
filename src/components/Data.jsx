/* eslint-disable no-unused-vars */
import React from "react";


const Data = (val) => {
  return (
    <div className="struct">
      <div id="list">
        <div className="item">
          <p>&#9711 &nbsp; {val}</p>
          <span>&times;</span>
        </div>
      </div>
    </div>
  );
};

export default Data;
