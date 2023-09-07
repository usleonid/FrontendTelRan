import { CHANGE_AVATAR, CHANGE_NAME } from "../actions/userActions"
import { Action, State } from "../utils/types"


export const twitterReducer = (state: State, action: Action) => {
    let user;
    switch(action.type) {
        case CHANGE_NAME:
            user = {...state.user, name: action.payload};
            return {...state, user}
        case CHANGE_AVATAR:
            user = {...state.user, avatar: action.payload};
            return {...state, user}
        default:
            return state
    }
}