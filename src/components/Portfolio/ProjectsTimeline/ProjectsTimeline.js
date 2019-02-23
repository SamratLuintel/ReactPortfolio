import React, { Component } from "react";
import EMM from "../../../assets/images/projects/emm.png";
import SingleProjectCard from "./SingleProjectCard/SingleProjectCard";

class ProjectsTimeline extends Component {
  render() {
    return (
      <div className="ProjectsTimeline">
        <div className="ProjectsTimeline__projects-lists">
          <SingleProjectCard
            title="EMM-Email Manager"
            subtitle="Create beautiful emails"
            description="EMM is the easiest,quickest way to design elegant,mobile
            responsive emails. It serves as:"
            bulletsInfo={[
              "an online email manager that allows the user to create a customized email template,keep track of user and send it",
              "an online email manager that allows the user to create a customized email template,keep track of user and send it."
            ]}
            technologies={[
              "react",
              "redux",
              "nodejs",
              "express",
              "mongodb",
              "bem+scss"
            ]}
            image={EMM}
            first
          />
          <SingleProjectCard
            title="EMM-Email Manager"
            subtitle="Create beautiful emails"
            description="EMM is the easiest,quickest way to design elegant,mobile
            responsive emails. It serves as:"
            bulletsInfo={[
              "an online email manager that allows the user to create a customized email template,keep track of user and send it",
              "an online email manager that allows the user to create a customized email template,keep track of user and send it."
            ]}
            technologies={[
              "react",
              "redux",
              "nodejs",
              "express",
              "mongodb",
              "bem+scss"
            ]}
            image={EMM}
          />
        </div>
      </div>
    );
  }
}

//EMM is an online email manager that allows the user to create
//a customized email template,keep track of user and send it.
export default ProjectsTimeline;
