import { combineReducers } from "redux";
import { textReducer } from "./textReducer";
import { counterReducer } from "./counterReducer";
   
//combinereducer expect object
export let rootReducer=combineReducers({
 textReducer,
    counterReducer
})