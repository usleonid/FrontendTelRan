// import { createAction } from "@reduxjs/toolkit";

import { putQuote, pendingQuote, errorQuote } from "../slices/bankSlice";

// export const deposit = createAction('DEPOSIT')

// export const withdraw = createAction('WITHDRAW')

// export const putQuote = createAction('PUT_QUOTE')

export const fetchQuote = () => {

    return async (dispatch, getState) => {
        dispatch(pendingQuote());
        try {
            const response = await fetch('https://api.gameofthronesquotes.xyz/v1/random');
            const data = await response.json();
            dispatch(putQuote(data.sentence));
        } catch (e) {
            // dispatch(errorQuote(getState().account.quote));
            dispatch(errorQuote('Error'));
        }

    }
}