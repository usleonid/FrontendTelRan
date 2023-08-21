import React, { useContext } from "react";
import { SWContext } from "../utils/context";
import { Item } from "../utils/types";
import { Link } from "react-router-dom";

interface NavItemProps {
    item: Item
}
const NavItem = ({ item }: NavItemProps) => {
    
    return (
        <li>
            <Link className="nav-item btn btn-danger mx-1" to={`/${item.route}`}>
                {item.title}
            </Link>
        </li>
    );
};

export default NavItem;
