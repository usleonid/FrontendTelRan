import React from "react";
import { navItems } from "../utils/constants";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import Home from "./Home";
import { Item } from "../utils/types";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const Main = ({currentPage} :{currentPage:Item}) => {
    return (
        <Routes>
            <Route path={`/`} element={<Home />} />
            <Route path={`/${navItems[0].route}`} element={<Home />} />
            <Route path={`/${navItems[1].route}`} element={<AboutMe />} />
            <Route path={`/${navItems[2].route}`} element={<StarWars />} />
            <Route path={`/${navItems[3].route}`} element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
    // switch (currentPage.title) {
    //     case navItems[1].title:
    //         return <AboutMe />
    //     case navItems[2].title:
    //         return <StarWars />
    //     case navItems[3].title:
    //         return <Contact />
    //     default:
    //         return <Home />
    // }
};

export default Main;
