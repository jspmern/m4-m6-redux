import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decHandler, incHandler, textHandler } from "./Redux/action";

function Conter() {
  let x = useSelector((data) => {
    return data.counterReducer;
  });
  let y=useSelector((data)=>{
    return data.textReducer
  })
  
  let dispatch = useDispatch();
  return (
    <>
      <h1>inc:{x.inc}</h1>
      <h1>dec:{x.dec}</h1>
      <button
        onClick={() => {
          dispatch(incHandler());
        }}
      >
        inclrement
      </button>

      <button
        onClick={() => {
          dispatch(decHandler());
        }}
      >
        dec
      </button>
      <br/>
      <hr/>
      <input type="text" value={y.text} onChange={(e)=>{
        dispatch(textHandler(e))
      }}/>
      <h1>enter value is : {y.text}</h1>
    </>
  );
}

export default Conter;
