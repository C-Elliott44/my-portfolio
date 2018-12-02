import React from "react";
import { NavLink } from "react-router-dom";

const CodePen = () => {
    return (
        <div class="wrapper">
            <section>
                <p>View Page</p>
                <NavLink to="/">Home</NavLink>
            </section>
        </div>
    );
}

export default CodePen;