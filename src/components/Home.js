import React, { Component } from "react";
import 'typeface-roboto'
import CodePenNav from './nav-components/CodePen';
import AboutNav from './nav-components/About';
import ContactNav from './nav-components/Contact';
import ProjectsNav from './nav-components/Projects';

class Home extends Component {
  render() {
    return (
      <div class="wrapper">
  <AboutNav />
  <ProjectsNav />
  <CodePenNav />
  <ContactNav />
  <section>
    <div>
      <div className="avatar"></div>
      <h1 className="title">Cameron Elliott</h1>
      <p className="subtitle">Full Stack Web Developer</p>
    </div>
  </section>
</div>
    );
  }
}

export default Home;
