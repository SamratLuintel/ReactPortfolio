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
          Nearly every app I have done in the past had the back-end written also
          by me. In order to improve the development speed, performance and
          reliability.
        </p>
        <p className="Skills__paragraph">What I can do is</p>
        <ul className="Skills__list">
          <li>
            cooperation with APIs, remote data synchronizations, cloud servers,
            asynchronous workers
          </li>
          <li>using different types of databases (like MySQL, MongoDB)</li>
          <li>
            refactoring existing applications, by improving code readibility,
            separating concerns into separate functions and classes, splitting
            out the business logic from app's views and controllers (DDD), and
            moving the app architecture into more event-based one
          </li>
          <li>writing unit and e2e tests</li>
        </ul>
      </div>
    );
  }
}
export default BackEnd;
