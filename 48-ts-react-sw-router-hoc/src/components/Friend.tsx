import { useContext } from "react";
import { characters, navItems, styleForFriend } from "../utils/constants";
import { SWContext } from "../utils/context";
import { useNavigate } from "react-router-dom";

interface Props {
    number: number,
    hero: string
}

const Friend = ({ hero, number }: Props) => {
  const { changeHero } = useContext(SWContext);
  const navigate = useNavigate();

  let friendStyle = "col-4 p-1 ";

  if (number === 7) {
    friendStyle += styleForFriend.bottomLeft;
  }

  if (number === 9) {
    friendStyle += styleForFriend.bottomRight;
  }

  return <img 
            onClick={() =>    navigate(`/${navItems[0].route}/${hero}`)} 
            className={friendStyle} src={characters[hero].img} 
            alt={characters[hero].name} 
  />;
};

export default Friend;
