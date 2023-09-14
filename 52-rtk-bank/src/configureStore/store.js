import { configureStore } from "@reduxjs/toolkit"
import bankReducer from '../slices/bankSlice'

const initialState = {
    account: {
        balance: 0,
        quote: 'Winter is comming...'
    }
}

export const store = configureStore({
    reducer: {
        account: bankReducer
    },
    preloadedState: initialState
});