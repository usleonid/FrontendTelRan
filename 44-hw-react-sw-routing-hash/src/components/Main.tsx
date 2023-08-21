import React from "react";
import { navItems } from "../utils/constants";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import Home from "./Home";
import { Item } from "../utils/types";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const Main = () => {
    return (
        <Routes>
            {[`/`, `/${navItems[0].route}`].map(p => <Route key={p} path={p} element={<Home />} /> )}
            {[`/${navItems[1].route}`, `/${navItems[1].route}/:heroId`]
            .map(p =>  <Route key={p} path={p} element={<AboutMe />} />)}          
            <Route path={`/${navItems[2].route}`} element={<StarWars />} />
            <Route path={`/${navItems[3].route}`} element={<Contact />} />
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    )
};

export default Main;
