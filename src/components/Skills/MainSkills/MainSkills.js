import React, { Fragment } from "react";

const MainSkills = props => {
  return (
    <Fragment>
      <h1 className="Skills__title">SKILLS & OFFER</h1>
      <p className="Skills__paragraph">
        I am a freelance <strong>full-stack web developer</strong>.
      </p>
      <p className="Skills__paragraph">
        I have maintained, developed and launched <span>multiple projects</span>{" "}
        from scratch, carrying the development of its' back-end and front-end
        codebases.
      </p>
      <p className="Skills__paragraph">
        My current toolset includes{" "}
        <span>
          React, Redux, SCSS, Express, NodeJs, MongoDB, Socket.IO, D3.js
        </span>{" "}
        and all other various frameworks, libraries and technologies related to
        them.
      </p>
      <p className="Skills__paragraph">
        Feel free to ask me any questions. I can help you in your project in all
        from the UI mockups, back-end and front-end web development to fixing
        the design and installing & configuration of the application on
        staging/production enviroments.
      </p>
      <p className="Skills__paragraph">
        <em>Call me a Swiss Army Knife in terms of web development.</em>
      </p>
    </Fragment>
  );
};

export default MainSkills;
