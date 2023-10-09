import React, { useState } from 'react'

interface Props {
    close: () => void
}

const ChangePassword = ({close}: Props) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('')
  
  const handleClickClear = () => {
    setOldPassword('');
    setNewPassword('');
    setRepeatNewPassword('');
}

const handleClickSave = () => {
    // TODO 
    if (newPassword === repeatNewPassword) {
        alert('save and close');
        
    } else {
        alert('new password and repeat pass are different')
    }
    close();
}

    return (
    <div>
        <label>Enter old password:
            <input 
                onChange={e => setOldPassword(e.target.value.trim)}
                type="password"
                value={oldPassword} />
        </label>
        <label>Enter new password:
            <input 
                onChange={e => setNewPassword(e.target.value.trim)}
                type="password"
                value={newPassword} />
        </label>
        <label>Repeat new password:
            <input 
                onChange={e => setRepeatNewPassword(e.target.value.trim)}
                type="password"
                value={repeatNewPassword} 
            />
        </label>
        <button onClick={handleClickClear}>Clear</button>
        <button onClick={handleClickSave}>Save and close</button>
        <button onClick={close}>Close without changes</button>
    </div>
  )
}

export default ChangePassword