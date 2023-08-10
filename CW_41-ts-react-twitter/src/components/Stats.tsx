import React, { useContext } from 'react'
import Avatar from './Avatar'
import { UserContext } from '../utils/userContext'



const Stats = () => {
    const { name, followers, following } = useContext(UserContext);
    return (
        <div className='user-stats'>
            <div>
                <Avatar />
                {name}
            </div>
            <div className='stats'>
                <div>Followers: {followers}</div>
                <div>Following: {following}</div>
            </div>
        </div>
    )
}

export default Stats