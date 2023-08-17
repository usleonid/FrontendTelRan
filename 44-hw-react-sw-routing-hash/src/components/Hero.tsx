import React from "react";
import { heroMain } from "../utils/constants";

const Hero = () => {
    return (
        <section className="float-start me-3 w-25">
            <img className="w-100" src={heroMain} alt="Hero" />
        </section>
    );
};

export default Hero;
