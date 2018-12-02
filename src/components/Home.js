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
        <div class="miniContact">
          <a href="mailto:CameronJohnElliott@Gmail.com?Subject=Developer%20Inquiry" target="_top"><img src="https://img.icons8.com/ios/50/000000/new-post.png"></img></a>
          <a href="https://github.com/C-Elliott44" target="_blank"><img src="https://img.icons8.com/ios/50/000000/github.png"></img></a>
          <a href="https://linkedin.com/in/cameron-elliott" target="_blank"><img src="https://img.icons8.com/ios/50/000000/linkedin.png"></img></a>
        </div>
      </div>
    </section>
  </div>
    );
  }
}

export default Home;
