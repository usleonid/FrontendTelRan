import React, { useState } from 'react'
import './App.css'
import { friends } from './utils/constants';
import Content from './components/Content';

const App = () => {
  const [hero, setHero] = useState();
  if (hero) {
    return (
      <div className='App'>
        <Content changeHero={setHero} friend={hero} size='large' />
      </div>
    )
  } else {
    return (
      <div className='App'>
        {/* {friends.map((friend, index) => <img key={index} src={friend} alt='friend' />)} */}
        {friends.map((f, i) => <Content changeHero={setHero} key={i} friend={f}/>)}
      </div>
    )
  }
  
}

export default App;
