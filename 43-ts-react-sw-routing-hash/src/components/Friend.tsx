import { styleForFriend } from "../utils/constants"; 

const Friend = ({ photo, number}:any ) => {
    let friendStyle = 'col-4 p-1 ';

    if (number === 7) {
        friendStyle += styleForFriend.bottomLeft;
    }

    if (number === 9) {
        friendStyle += styleForFriend.bottomRight;
    }

    return <img className={friendStyle} src={photo} alt="friend" />;
};

export default Friend;
