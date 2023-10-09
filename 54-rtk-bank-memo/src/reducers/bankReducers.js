// import { createReducer } from "@reduxjs/toolkit";
// import { deposit, putQuote, withdraw } from "../actions/accountActions";

// const initialAccount = {
//     balance: 0,
//     quote: 'Winter is comming...'
// }

// export const bankReducer = createReducer(initialAccount, {
//     [deposit]: (state, action) => {
//         state.balance += action.payload
//     },
//     [withdraw]: (state, action) => {
//         const res = state.balance - action.payload;
//         state.balance = res < 0 ? state.balance : res;
//     },
//     [putQuote]: (state, action) => {
//         state.quote = action.payload;
//     }
// })
