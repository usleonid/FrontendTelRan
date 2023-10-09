import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deposit, withdraw } from '../slices/bankSlice';
import { fetchQuote } from '../actions/accountActions';

const Operation = () => {

    const [sum, setSum] = useState(1);
    const dispatch = useDispatch();

    return (
        <div className='container'>
            <div className='d-flex justify-content-center'>
                <button
                    className='btn btn-primary btn-lg'
                    onClick={() => dispatch(withdraw(sum))}
                >Withdraw</button>
                <input
                    className='form-control-lg text-center'
                    onChange={e => setSum(+e.target.value)}
                    value={sum}
                    type='number'
                    min={0}
                />
                <button
                    className='btn btn-primary btn-lg'
                    onClick={() => dispatch(deposit(sum))}
                >Deposit</button>
            </div>
            <div className='d-flex justify-content-center'>
                <button
                    className='btn btn-info btn-lg'
                    onClick={() => dispatch(fetchQuote())}
                >Get Quote</button>
            </div>
        </div>
    )

}

export default Operation;
