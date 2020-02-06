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
            In back-end development, I work with <span>NodeJs</span>. I mostly
            deploy application on <span>AWS via Docker</span>
          </strong>{" "}
        </p>

        <p className="Skills__paragraph">
          My current experience and skills in back-end include
        </p>
        <ul className="Skills__list">
          <li>creating RESTful API and various types of microservices.</li>
          <li>
            using different types of databases (like MySQL, MongoDB) as well as
            some ORM's (Sequelize)
          </li>
          <li>
            Dockerizing existing application and setting up CI/CD in circleCI.
          </li>
          <li>writing unit test in jest</li>
        </ul>
      </div>
    );
  }
}
export default BackEnd;
