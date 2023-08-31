import { Route, Routes } from "react-router-dom";
import { navItems } from "../utils/constants";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import StarWars from "./StarWars";

const Main = () => {
    return (
        <Routes>
            {[`/`, `/${navItems[0].route}`, `/${navItems[0].route}/:heroId`]
            .map(p => <Route key={p} path={p} element={<Home />} /> )}
            {[`/${navItems[1].route}`, `/${navItems[1].route}/:heroId`]
            .map(p =>  <Route key={p} path={p} element={<AboutMe />} />)}          
            <Route path={`/${navItems[2].route}/:heroId`} element={<StarWars />} />
            <Route path={`/${navItems[3].route}/:heroId`} element={<Contact />} />
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    )
};

export default Main;
