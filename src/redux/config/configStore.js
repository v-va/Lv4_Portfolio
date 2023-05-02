import { combineReducers, createStore } from "redux";
import project from "../modules/projectReducer"

const rootReducer = combineReducers({
    project
})

const store = createStore(rootReducer);

export default store