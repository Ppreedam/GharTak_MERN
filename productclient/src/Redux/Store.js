import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import Appreducer from "./Appreducer/reducer";
import { Authreducer } from "./AuthReducer/reducer";
import thunk from "redux-thunk";

const rootreducer = combineReducers({Appreducer,Authreducer})
const Store = legacy_createStore(rootreducer, applyMiddleware(thunk))

export default Store