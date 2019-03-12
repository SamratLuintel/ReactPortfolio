import React, { Component } from "react";
import { Route } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import { withRouter } from "react-router-dom";

class App extends Component {
  componentDidMount = () => {
    if (this.props.location.pathname === "/") {
      this.props.history.push("/portfolio");
    }
  };

  render() {
    return (
      <div className="App">
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/contact" component={Contact} />
      </div>
    );
  }
}

export default withRouter(App);
