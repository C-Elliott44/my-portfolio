import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import "./App.css";


import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import CodePen from "./components/CodePen";
import About from "./components/About";
import Error from "./components/Error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/codepen" component={CodePen} />
            <Route path="/about" component={About} /> 
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
