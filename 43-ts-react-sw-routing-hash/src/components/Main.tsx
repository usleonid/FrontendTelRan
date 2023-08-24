import React from "react";
import { navItems } from "../utils/constants";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import Home from "./Home";
import { Item } from "../utils/types";

const Main = ({currentPage} :{currentPage:Item}) => {
    switch (currentPage.title) {
        case navItems[1].title:
            return <AboutMe />
        case navItems[2].title:
            return <StarWars />
        case navItems[3].title:
            return <Contact />
        default:
            return <Home />
    }
};

export default Main;
