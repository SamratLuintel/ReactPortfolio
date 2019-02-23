import React, { Component } from "react";
import { Route } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    );
  }
}

export default App;
