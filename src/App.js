import React, { Component } from "react";
import { Route } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/skills" component={Skills} />
      </div>
    );
  }
}

export default App;
