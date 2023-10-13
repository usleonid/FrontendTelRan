import React from 'react'
import { useAppSelector } from '../../app/hooks'

const ProfileData = () => {
  const user = useAppSelector(state => state.user)
  
    return (
    <div>
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <p>Login: {user.login}</p>
        <ul>
            {user.roles.map(r => <li key={r}>{r}</li>)}
        </ul>
    </div>
  )
}

export default ProfileData