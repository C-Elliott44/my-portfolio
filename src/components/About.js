import React from "react";
import { NavLink } from "react-router-dom";
import CinqueTerre from "../photos/CinqueTerre.JPG";
import "../../src/AboutMe.css";

const About = () => {
    return (
        <div class="wrapper">
            <section class="aboutSection">
                <img src={CinqueTerre} class="aboutImg" />
                <h1>About Me</h1>
                <p>Hi, My name is Cameron. I'm a Full Stack Web Developer fresh out of the UCSD Extention Web Development Bootcamp! </p>
                <p>By day I work at a family run Biotec company, and by night you can find me at your local San Diego coffee shop developing my skills or a freelance project.</p>
                <p>I enjoy spending my free time surfing the long rolling waves of La Jolla shores, rowing out of San Diego Rowing Club on Mission Bay, and exploring the many hidden gems hidden through out San Diego.</p>
                <p>A Few of my current goals include getting my carrer started as a web developer, planning a surfing road trip up California Highway 1, and learning the ins and outs of developing my own freelance web development business.</p>
                <NavLink to="/">Home</NavLink>
            </section>
        </div>
    );
}

export default About;
