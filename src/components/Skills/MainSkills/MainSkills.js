import React, { Fragment } from "react";

const MainSkills = props => {
  return (
    <Fragment>
      <h1 className="Skills__title">SKILLS & OFFER</h1>
      <p className="Skills__paragraph">
        I am a <strong>full-stack web developer</strong> with close to a year of
        experience.
      </p>

      <p className="Skills__paragraph">
        My current toolset includes{" "}
        <span>
          React, Redux,VueJs, VueX SCSS, Express, NodeJs, MongoDB,Sequelize,
          Socket.IO, D3.js
        </span>{" "}
        and all other various frameworks, libraries and technologies related to
        them.
      </p>
    </Fragment>
  );
};
// <p className="Skills__paragraph">
// Feel free to include me in your next project. I can do everything from
// creating UI mockups to complete full stack application
// </p>
export default MainSkills;
