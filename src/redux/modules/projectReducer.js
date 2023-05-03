// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//     {id: 1, title: '', info: '', content: '', path: '', url: ''}
// ]

// // action value
// export const ADD_PROJ = "todo/ADD_PROJ";
// export const DEL_PROJ = "todo/DEL_PROJ";

// // action creator
// // export const addProj = (payload) => {
// //     return {
// //         type: ADD_PROJ,
// //         payload,
// //     }
// // }

// export const delProj = (payload) => {
//     return {
//         type: DEL_PROJ,
//         payload,
//     }
// }

// const project = (state=initialState, action) => {
//   switch (action.type){
//     case ADD_PROJ:
//         return [...state, action.payload]
//     case DEL_PROJ:
//         return state.filter((todo) => {
//             return todo.id !== action.payload
//         })
//     default:
//         return state;
//   }
// }

// const projectSlice = createSlice({
//     name : 'project',
//     initialState,
//     reducers : {
//         addProj : (state, action) => {

//         },
//         updateProj : (state, action) => {

//         },
//     },
// });


// export default projectSlice.reducer;
// // export {} projectSlice.actions