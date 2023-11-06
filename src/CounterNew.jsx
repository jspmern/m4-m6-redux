import React from "react";
import { connect } from "react-redux";
import CounterNewButton from "./CounterNewButton";
import  style from './CounterNew.module.css'

function CounterNew({ inc}) {

  return (
    <>
      <h1 className={style.bgcolorg}> inc: {inc.inc}</h1>
        <CounterNewButton/>
    </>
  );
}

//consuming value form store
function mapStateToProps(state) {
  return {
    inc: state.counterNewReducer,
  };
}

//dispatch (i shifted in a counterNewButton)
// function mapDispatchToProps(dispatch) {
//   return {
//     incHandler: () => {
//       dispatch(incHandlerNew());
//     },
//   };
// }

// export default  CounterNew
export let NewComp =  connect(mapStateToProps )(CounterNew);

       //or
//export default connect(mapStateToProps, mapDispatchToProps)(CounterNew)
 
