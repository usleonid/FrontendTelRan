// state = {
//     balance: number
//     quote: string
// }

import { DEPOSIT, PUT_QUOTE, WITHDRAW } from "../actions/accountActions";

export const bankReducer = (state, action) => {
    switch(action.type) {
        case DEPOSIT:
            return {...state, balance: state.balance + action.payload}
        case WITHDRAW:
            const res = state.balance - action.payload;
            return {...state, balance: res < 0 ? state.balance : res}
        case PUT_QUOTE:
            return {...state, quote: action.payload}
        default:
            return state;
    }
}