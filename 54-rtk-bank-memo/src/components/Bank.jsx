import React from 'react'

const Bank = ({ info, index }) => {
    // console.log(`Render Bank ${info}`);
    // console.log(`Render Bank ${info.name}`);
    console.log(`Render Bank ${info(index).name}`);
  return (
    <h1 className='text-center text-uppercase'>Iron Bank of {info(index).name}</h1>
  )
}

export default React.memo(Bank)