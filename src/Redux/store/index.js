import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../reducer";
//this is the 3rd party library for handling asyn task
import thunk from 'redux-thunk'
//our redux eligible to use third party dep...
 export  let store= createStore(rootReducer,applyMiddleware(thunk))