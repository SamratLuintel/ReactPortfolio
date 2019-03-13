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
            I specialise in applications written in <span>React.</span>
          </strong>{" "}
        </p>
        <p className="Skills__paragraph">
          My current experience and skills in front-end include
        </p>
        <ul className="Skills__list">
          <li>
            knowledge and huge experience in many JS ecosystem, by using many
            libraries like React, Redux, Redux-thunk, RxJS, React-router
            Lodash/Underscore and whatever else was needed.
          </li>
          <li>
            full integration of front-end development using tools like Webpack
            with features like automatic code reload, code minifications,
            multiple environments support,
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
