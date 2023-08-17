import React, { useContext } from "react";
import { SWContext } from "../utils/context";
import { Item } from "../utils/types";

interface NavItemProps {
    item: Item
}
const NavItem = ({ item }: NavItemProps) => {
    
    return (
        <li
            onClick={() => window.location.hash = `#/${item.route}`}
            className="nav-item btn btn-danger mx-1"
        >
            {item.title}
        </li>
    );
};

export default NavItem;
