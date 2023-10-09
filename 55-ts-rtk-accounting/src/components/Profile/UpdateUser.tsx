import React, { useState } from 'react'
import EditUser from './EditUser'
import ChangePassword from './ChangePassword'
import { UpdateMode } from '../../utils/types.d'

const UpdateUser = () => {
  const [updateMode, setUpdateMode] = useState('')
  const close = () => {
    setUpdateMode(UpdateMode.default)
}
  switch (updateMode) {
    case UpdateMode.editUser:
        return <EditUser close={close} />
    case UpdateMode.changePassword:
        return <ChangePassword close={close} />
    default:
        return (
            <div>
                <button onClick={() => setUpdateMode('changePassword')}>Change password</button>
                <button onClick={() => setUpdateMode('editUser')}>Edit profile</button>
            </div>
        );
  }
}

export default UpdateUser