import React from 'react';
import { useSelector } from 'react-redux';

const Balance = () => {
    const {quote, balance} = useSelector(state => state.account);

    return (
        <div>
            <h1 className='text-center text-uppercase'>Iron Bank of Braavos</h1>
            <h3 className='text-center text-uppercase'>{quote}</h3>
            <h2 className='text-center text-uppercase'>Balance = {balance}</h2>
        </div>
    )

}
export default Balance;