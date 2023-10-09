import React, { useContext } from 'react'
import Avatar from './Avatar'
import { UserContext } from '../utils/userContext'



const Stats = () => {
    const { name, followers, following, changeFollowers, changeFollowing } = useContext(UserContext);
    return (
        <div className='user-stats'>
            <div>
                <Avatar />
                {name}
            </div>
            <div className='stats'>
                <div
                onClick={
                    () => changeFollowers(1)
                }
                onContextMenu={
                    e => {
                        e.preventDefault();
                        changeFollowers(-1)
                    }
                }
                >Followers: {followers}</div>
                <div
                onClick={
                    () => changeFollowing(1)
                }
                onContextMenu={
                    e => {
                        e.preventDefault()
                        changeFollowing(-1)
                    }
                }
                >Following: {following}</div>
            </div>
        </div>
    )
}

export default Stats