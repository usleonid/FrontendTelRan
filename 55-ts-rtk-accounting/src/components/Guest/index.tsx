import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';

const Guest = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      {isLogin ? <Login/> : <Register/>}
      <button 
        onClick={() => setIsLogin(prevState => !prevState)}
      >
        Switch to {isLogin ? "Sign Up" : "Sign In"}
      </button>
    </div>
  )
}

export default Guest