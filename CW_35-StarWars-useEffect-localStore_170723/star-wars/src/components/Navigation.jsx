import React from "react";
import { navItems } from "../utils/constants";
import NavItem from "./NavItem";

const Navigation = ({ changePage }) => {
    return (
        <nav className="fixed-top mt-2 ms-4">
            <ul className="nav">
                {navItems.map((item, index) => <NavItem changePage={changePage} key={index} itemTitle={item}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;
