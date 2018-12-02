import React from "react";
import { NavLink } from "react-router-dom";
import "../../src/Project.css";
import DevTownPic from "../photos/DevTown-Shot.png";
import PotLuckyPic from "../photos/PotLucky-Shot.png";
import TarotDailyPic from "../photos/TarotDaily-Shot.png";

const ProjectCard = (props) => {
    return (
      <div className="card">
          <img className="cardImg" src={props.item.url} />
      </div>
    )
  };

  const ProjectContainer = (props) => {
    return (
      <div className="ProjectContainer">
        {props.projects.map(u => {
          return <ProjectCard
                    item={u}
                    />
        })}
      </div>
    );
  };

class Projects extends React.Component{
    constructor(props) {
      super(props);
      this.state = [
            {url: DevTownPic},
            {url: PotLuckyPic},
            {url: TarotDailyPic},
          ]; 
    }
  
    render() {
        return (
            <div class="wrapper">
              <section>
                <h1 className="title">Projects</h1>
                <NavLink className="NavHome" to="/">Home</NavLink>
                <ProjectContainer 
                  projects={this.state}
                />
              </section>
            </div>
        );
    }
  }

export default Projects;