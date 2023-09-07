import { bankReducer } from "../reducers/bankReducers";
import { legacy_createStore as createStore } from "@reduxjs/toolkit";

const initialState = {
    balance: 0,
    quote: 'Winter is coming...'
}

export const store = createStore(bankReducer, initialState);