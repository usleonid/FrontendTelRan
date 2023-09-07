import { bankReducer } from "../reducers/bankReducers";
import { createStore } from "../redux/createStore";

const initialState = {
    balance: 0
}

export const store = createStore(bankReducer, initialState);