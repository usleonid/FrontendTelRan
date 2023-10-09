import { CHANGE_AVATAR, CHANGE_NAME } from "../actions/userActions";
import { Action, User } from "../utils/types";

export const defaultUser = {
    avatar: 'https://www.gravatar.com/avatar/00?d=mp',
    name: 'User'
}

export const userReducer = (state: User = defaultUser, action: Action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {...state, name: action.payload ?? state.name}
        case CHANGE_AVATAR:
            return {...state, avatar: action.payload ?? state.avatar}
        default:
            return state
    }
}