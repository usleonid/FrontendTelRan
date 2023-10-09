import React from "react";
import Navigation from "./Navigation";

const Header = ({ changePage }: any) => {
    return (
        <header>
            <Navigation changePage={changePage} />
            <h1 className="text-center">Luke Skywalker</h1>
        </header>
    );
};

export default Header;
