import React, { useState } from 'react'

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
  
    const handleClickLogin = () => {
        // TODO register
        alert('register')
    }

    const handleClickClear = () => {
        setLogin('');
        setPassword('');
    }

    return (
    <>
        <label>Login:
            <input 
                onChange={e => setLogin(e.target.value.trim)}
                type="text" 
                value={login}
            />
        </label>
        <label>Password:
            <input 
                onChange={e => setPassword(e.target.value.trim)}
                type="password"
                value={password} 
            />
        </label>
        <button onClick={handleClickLogin}>Login</button>
        <button onClick={handleClickClear}>Clear</button>
    </>
  )
}

export default Login