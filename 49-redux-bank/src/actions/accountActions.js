export const DEPOSIT = 'DEPOSIT';
export const WITHDRAW = 'WITHDRAW';
export const PUT_QUOTE = 'PUT_QUOTE';

export const deposit = sum => ({
    type: DEPOSIT,
    payload: sum
})

export const withdraw = sum => ({
    type: WITHDRAW,
    payload: sum
})

export const putQuote = quote => ({
    type: PUT_QUOTE,
    payload: quote
})