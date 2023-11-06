import React from 'react'
import { connect } from 'react-redux';
import { incHandlerNew } from './Redux/action';

function CounterNewButton({incHandler}) {
  return (
    <>
      <button onClick={incHandler}>inc</button>
     </>
  )
}
function mapDispatchToProps(dispatch) {
  return {
    incHandler: () => {
      dispatch(incHandlerNew());
    },
  };
}

export default   connect(null,mapDispatchToProps)  (CounterNewButton)