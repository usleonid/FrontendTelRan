import { bankReducer } from "../reducers/bankReducers";
import { createStore } from "../redux/createStore";

const initialState = {
    balance: 0,
    quote: 'Winter is coming...'
}

export const store = createStore(bankReducer, initialState);