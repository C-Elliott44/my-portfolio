import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Contacts extends Component{

    render() {
            return (
                <NavLink to={"/contact"} class="test contactNav">
                    <div class="rotate90">C</div>
                    <div class="rotate90">o</div>
                    <div class="rotate90">n</div>
                    <div class="rotate90">t</div>
                    <div class="rotate90">a</div>
                    <div class="rotate90">c</div>
                    <div class="rotate90">t</div>
                </NavLink>
            );
    }
}

export default Contacts;