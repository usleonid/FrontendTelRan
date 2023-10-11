import React from 'react'
import ProfileData from './ProfileData'
import UpdateUser from './UpdateUser'

interface Props {
  token: string
}

const Profile = ({token}: Props) => {
  const handleClickLogout = () => {
    //TODO Logout
    alert('logout')
  }
  return (
    <div>
      <ProfileData/>
      <button onClick={handleClickLogout}>Logout</button>
      <UpdateUser/>
    </div>
  )
}

export default Profile