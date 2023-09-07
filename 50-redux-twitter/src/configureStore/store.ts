import { legacy_createStore as createStore } from "@reduxjs/toolkit"
import { twitterReducer } from "../reducers/twitterReducer";

const initialState = {
    user: {
        avatar: 'https://www.gravatar.com/avatar/00?d=monsterid',
        name: 'Monster'
    },
    stats: {
        followers: 0,
        following: 0
    }
}

// @ts-ignore
export const store = createStore(twitterReducer, initialState);