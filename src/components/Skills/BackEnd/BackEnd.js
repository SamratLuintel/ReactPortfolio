import React, { Component } from "react";

class BackEnd extends Component {
  render() {
    return (
      <div className="Backend">
        <h1 className="Skills__header">
          <i className="fas fa-database" />
          Back-end Web development
        </h1>
        <p className="Skills__paragraph">
          <strong>
            In back-end development, my current stack involves{" "}
            <span>NodeJs</span> and <span>ExpressJs Framework</span>
          </strong>{" "}
        </p>

        <p className="Skills__paragraph">
          My current experience and skills in back-end include
        </p>
        <ul className="Skills__list">
          <li>
            cooperation with APIs, remote data synchronizations, cloud servers,
            asynchronous workers
          </li>
          <li>using different types of databases (like MySQL, MongoDB)</li>
          <li>
            refactoring existing applications and writing it in modern
            javascript
          </li>
          <li>writing unit test in jest</li>
        </ul>
      </div>
    );
  }
}
export default BackEnd;
