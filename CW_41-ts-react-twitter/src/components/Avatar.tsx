import React, { useContext } from 'react'
import { UserContext } from '../utils/userContext';

interface Props {

    size?: string
}


const Avatar = ({size }: Props) => {
    
    const {avatar, name, changeAvatar, changeName} = useContext(UserContext);
    
    const handleClick = () => {
        const url = prompt('Enter new avatar url') as string;
        changeAvatar(url);
    }

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        const name = prompt('Enter new username');
        if (name) {
            changeName(name)
        }
    }

    return (
        <img 
            className={`user-avatar ${size || ''}`} 
            src={avatar} 
            alt={name} 
            onClick={handleClick}
            onContextMenu={handleContextMenu}
        />
    )
}

export default Avatar