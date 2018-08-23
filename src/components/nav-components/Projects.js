import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "../../App.css"
class Projects extends Component{

    render() {
            return (
                <NavLink to={"/projects"} class="test projectsNav">
                    <div class="tester">P</div>
                    <div class="tester">r</div>
                    <div class="tester">o</div>
                    <div class="tester">j</div>
                    <div class="tester">e</div>
                    <div class="tester">c</div>          
                    <div class="tester">t</div>
                    <div class="tester">s</div>
                </NavLink>
            );
    }
}

export default Projects;