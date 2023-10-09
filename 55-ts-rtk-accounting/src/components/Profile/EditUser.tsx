import React, { useState } from 'react'

interface Props {
    close: () => void
}

const EditUser = ({close}: Props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    const handleClickClear = () => {
        setFirstName('');
        setLastName('');
    }

    const handleClickSave = () => {
        // TODO 
        alert('save and close');
        close();
    }

    return (
    <div>
        <label>First name:
            <input 
                onChange={e => setFirstName(e.target.value.trim)}
                type="text"
                value={firstName} 
            />
        </label>
        <label>Last name:
            <input 
                onChange={e => setLastName(e.target.value.trim)} 
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