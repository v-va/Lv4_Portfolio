import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers, createStore } from "redux";
import project from "../modules/projectReducer"

// ASIS : 일반 리듀서
// const rootReducer = combineReducers({
//     project
// })

// const store = createStore(rootReducer);

// TODO : Redux Toolkit
    const store = configureStore({
        reducer : {
            project,
        }
    });

export default store