import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class CodePenNav extends Component{

    render() {
            return (
                <NavLink to={"/codepen"} className="test codePenNav">
                    <div className="tester">C</div>
                    <div className="tester">o</div>
                    <div className="tester">d</div>
                    <div className="tester">e</div>
                    <div className="tester">p</div>
                    <div className="tester">e</div>
                    <div className="tester">n</div>
                </NavLink>
            );
    }
}

export default CodePenNav;