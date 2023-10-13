import React, { useState } from 'react'
import { useAppDispatch } from '../../app/hooks';
import { registerUser } from '../../features/api/accountActions';

const Register = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const dispatch = useAppDispatch();


    const handleClickRegister = () => {
        dispatch(registerUser({login, password, firstName, lastName}));
    }

    const handleClickClear = () => {
        setLogin('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    return (
        <>
            <label>Login:
                <input 
                    onChange={e => setLogin(e.target.value)}
                    type="text" 
                    value={login}
                />
            </label>
            <label>Password:
                <input 
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    value={password} 
                />
            </label>
            <label>First name:
                <input 
                    onChange={e => setFirstName(e.target.value)}
                    type="text"
                    value={firstName} 
                />
            </label>
            <label>Last name:
                <input 
                    onChange={e => setLastName(e.target.value)}
                    type="text"
                    value={lastName} 
                />
            </label>
            <button onClick={handleClickRegister}>Register</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    )
}

export default Register