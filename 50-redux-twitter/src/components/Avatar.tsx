	
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State, User } from '../utils/types';
import { changeAvatar, changeName } from '../actions/userActions';

interface Props {

    size?: string
}


const Avatar = ({ size }: Props) => {
    const { avatar, name } = useSelector<State, User>(state => state.user);
    const dispatch = useDispatch();

    const handleClick = () => {
        const url = prompt('Enter new avatar url') as string;
        dispatch(changeAvatar(url));
    }

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        const name = prompt('Enter new user name');
        if (name) {
            dispatch(changeName(name));
        }

    }
    return (
        <img
            className={`user-avatar ${size || ''}`}
            src={avatar} alt={name}
            onClick={handleClick}
            onContextMenu={handleContextMenu}
        />
    )

}

export default Avatar