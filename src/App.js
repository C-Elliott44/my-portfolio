import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import rowingPic from "./photos/rowing.jpg";

class App extends Component {
  render() {
    return (
      <div class="wrapper">
  <div class="test aboutNav">
    <div class="rotate270">t</div>
    <div class="rotate270">u</div>
    <div class="rotate270">o</div>
    <div class="rotate270">b</div>
    <div class="rotate270">A</div>
  </div>
  <div class="test projectsNav">
   <div class="tester">P</div>
   <div class="tester">r</div>
   <div class="tester">o</div>
   <div class="tester">j</div>
   <div class="tester">e</div>
   <div class="tester">c</div>          
   <div class="tester">t</div>
   <div class="tester">s</div>
  </div>
  <div class="test codePenNav">
   <div class="tester">C</div>
   <div class="tester">o</div>
   <div class="tester">d</div>
   <div class="tester">e</div>
   <div class="tester">p</div>
   <div class="tester">e</div>
   <div class="tester">n</div>
  </div>
  <div class="test contactNav">
    <div class="rotate90">C</div>
    <div class="rotate90">o</div>
    <div class="rotate90">n</div>
    <div class="rotate90">t</div>
    <div class="rotate90">a</div>
    <div class="rotate90">c</div>
    <div class="rotate90">t</div>
  </div>
  <section>
    <div className="rowingImg"></div>
  </section>
</div>
    );
  }
}

export default App;
