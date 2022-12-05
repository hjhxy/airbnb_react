import {applyMiddleware, createStore} from "redux";
import entireReducer from './modules/entire/reducers'



export default createStore(entireReducer,applyMiddleware());
