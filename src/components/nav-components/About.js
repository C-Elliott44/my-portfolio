import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class About extends Component{

    render() {
            return (
                <NavLink to={"/about"} class="test aboutNav">
                    <div class="rotate270">t</div>
                    <div class="rotate270">u</div>
                    <div class="rotate270">o</div>
                    <div class="rotate270">b</div>
                    <div class="rotate270">A</div>
                </NavLink>    
            );
    }
}

export default About;
