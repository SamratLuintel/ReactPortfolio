import React, { Component } from "react";

class FrontEnd extends Component {
  render() {
    return (
      <div className="FrontEnd">
        <h1 className="Skills__header">
          <i class="far fa-edit" />
          Front-end Web development
        </h1>
        <p className="Skills__paragraph">
          <strong>
            I mostly work with <span>React</span>. However, I can work on{" "}
            <span>Vue</span> project too.
          </strong>{" "}
        </p>
        <p className="Skills__paragraph">
          My current experience and skills in front-end include
        </p>
        <ul className="Skills__list">
          <li>
            knowledge and experience working in latest version of React using
            React Hooks, Context API, React Router etc.
          </li>
          <li>
            ability to setup modern node based development workflow with proper
            test coverage.
          </li>
          <li>good sense of design and UX.</li>
          <li>
            ability to convert any REST API to a fully functional application by
            making the necessary front end
          </li>
        </ul>
      </div>
    );
  }
}
export default FrontEnd;
