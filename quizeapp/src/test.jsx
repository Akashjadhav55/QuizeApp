import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import quize from "./quize";

function Test() {
    let navigate = useNavigate()
    let Navigation = () =>{
        navigate(() => {
          <quize/>
        })
    }
    return ( 
      <div className="App">
         <h1>IQ Test for kids from 7 to 16 year old</h1>
         <button onClick={Navigation} >Start Test</button>
      </div>
    );
  }
  
  export default Test;
  