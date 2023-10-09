import { createSlice } from "@reduxjs/toolkit";

const initialAccount = {
    balance: 0,
    quote: 'Winter is comming...'
}

const bankSlice = createSlice({
    name: 'bank',
    initialState: initialAccount,
    reducers: {
        deposit(state, action) {
            state.balance += action.payload
        },
        withdraw(state, action) {
            const res = state.balance - action.payload;
            state.balance = res < 0 ? state.balance : res;
        },
        putQuote(state, action) {
            state.quote = action.payload;
        },
        pendingQuote(state) {
            state.quote = 'Pending...';
        },
        errorQuote(state, action){
            state.quote = action.payload;
        }
    }
})

export const {deposit, withdraw, putQuote, pendingQuote, errorQuote} = bankSlice.actions;
export default bankSlice.reducer