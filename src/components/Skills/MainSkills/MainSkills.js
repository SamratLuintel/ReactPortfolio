import React, { Fragment } from "react";

const MainSkills = props => {
  return (
    <Fragment>
      <h1 className="Skills__title">SKILLS & OFFER</h1>
      <p className="Skills__paragraph">
        I am a freelance <strong>full-stack web developer</strong>.
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
        Feel free to include me in your next project. I can do everything from
        creating UI mockups to complete full stack application
      </p>
    </Fragment>
  );
};

export default MainSkills;
