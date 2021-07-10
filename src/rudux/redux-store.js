import {combineReducers, createStore} from "redux";
import todosReducer from "./todos-reducer";


let reducers = combineReducers({
    todosPage: todosReducer
});



let store = createStore(reducers);


export default store;