import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Cats from "./Cats";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cats" component={Cats} />
        </div>
      </Router>
    );
  }
}

export default App;
