import { combineReducers } from "@reduxjs/toolkit";
import { statsReducer } from "./statsReducer";
import { userReducer } from "./userReducer";

// export const initialState = {
//     user: {
//         avatar: 'https://www.gravatar.com/avatar/00?d=monsterid',
//         name: 'Monster'
//     },
//     stats: {
//         followers: 0,
//         following: 0
//     }
// }

// export const rootReducer = (state: State = initialState, action: Action) => {
//     return {
//         user: userReducer(state.user, action),
//         stats: statsReducer(state.stats, action)
//     }
// }

export const rootReducer = combineReducers(
    {user: userReducer, stats: statsReducer}
)