import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { peopleReducer } from "./peopleSlice";
import thunkMiddleware from "redux-thunk";

const composedEnhancer = compose(applyMiddleware(thunkMiddleware));

const rootReducer = combineReducers({ people: peopleReducer });
export const store = createStore(rootReducer, composedEnhancer);
