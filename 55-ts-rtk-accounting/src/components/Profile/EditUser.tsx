import { useState } from 'react'
import { useAppDispatch } from '../../app/hooks';
import { updateUser } from '../../features/api/accountActions';

interface Props {
    close: () => void
}

const EditUser = ({close}: Props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const dispatch = useAppDispatch();
    
    const handleClickClear = () => {
        setFirstName('');
        setLastName('');
    }

    const handleClickSave = () => {
        dispatch(updateUser(firstName, lastName));
        close();
    }

    return (
    <div>
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
        <button onClick={handleClickClear}>Clear</button>
        <button onClick={handleClickSave}>Save and close</button>
        <button onClick={close}>Close without changes</button>
    </div>
  )
}

export default EditUser