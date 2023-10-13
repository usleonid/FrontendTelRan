import { useState } from 'react'
import { useAppDispatch } from '../../app/hooks';
import { fetchUser } from '../../features/api/accountActions';
import { createToken } from '../../utils/constants';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();

    const handleClickLogin = () => {
        dispatch(fetchUser(createToken(login, password)));
    }

    const handleClickClear = () => {
        setLogin('');
        setPassword('');
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
        <button onClick={handleClickLogin}>Login</button>
        <button onClick={handleClickClear}>Clear</button>
    </>
  )
}

export default Login