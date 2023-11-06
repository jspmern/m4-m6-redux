import { combineReducers } from "redux";
import { textReducer } from "./textReducer";
import { counterReducer } from "./counterReducer";
import { fetchReducer } from "./fetchReducer";
import counterNewReducer from "./counterNewReducer";

//combinereducer expect object

export let rootReducer = combineReducers({
  textReducer,
  counterReducer,
  fetchReducer,
  counterNewReducer,
});
