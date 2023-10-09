import React, { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import Bank from './Bank';
import { getBank, getRandomIndex, names } from '../utils/constants';

const Balance = () => {
   const {quote, balance} = useSelector(state => state.account);
    //    const info = 'Braavos'
    //    const [info, setInfo] = useState ({
    //     name: 'Braavos'
    //    })
    const index = getRandomIndex(names.length)
    // const info = {name: names[index]}
    // const info = useMemo(() => ({name: names[index]}), [index])
    // const info = index => getBank(index);
    const info = useCallback(index => getBank(index), [index])
    console.log(`Render Balance ${index}`);

   

    return (
        <div>
            <Bank info={info} index={index} />
            <h3 className='text-center text-uppercase'>{quote}</h3>
            <h2 className='text-center text-uppercase'>Balance = {balance}</h2>
        </div>
    )

}
export default Balance;