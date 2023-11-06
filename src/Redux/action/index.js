import { dec, error, fetched, inc, incNew, loading, text } from "./actionType";

//function creater

//inchandler with async task
function incHandler() {
  return (dispatch) => {
    console.log("hello1");
    setTimeout(() => {
      console.log("hello2");
      dispatch({ type: inc });
      console.log("hello3");
    }, 2000);
    console.log("hello4");
  };
}
//this is for dec
function decHandler() {
  return { type: dec };
}
//this is for text field
function textHandler(e) {
  return { type: text, payload: e };
}

//create action creator by using thunk for fetch

function fetchHandler() {
  let url = "https://jsonplaceholder.typicode.com/posts";
  return async (dispatch) => {
    dispatch({ type: loading });
    try {
      let res = (await fetch(url)).json();
      let data = await res
      dispatch({ type: fetched, payload: data });
    } catch (e) {
      dispatch({ type: error, payload: e });
    }
  };
}

function   incHandlerNew()
{
  return {type:incNew}
}

//export together
export { incHandler, decHandler, textHandler ,fetchHandler,incHandlerNew};
