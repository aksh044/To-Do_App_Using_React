// import { useReducer, useState } from "react";
import ToDoContextProvider from "./store/ToDoContext";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Heading";
import Heading from "./components/Heading";
import Input from "./components/Input";
import PrintData from "./components/PrintData";

function App() {
  return (
    <>
      <ToDoContextProvider>
        <center className="main-container">
          <Heading />
          <Input />
          <div className="data_container">
            <PrintData />
          </div>
        </center>
      </ToDoContextProvider>
    </>
  );
}

export default App;
