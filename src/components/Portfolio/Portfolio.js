import React, { Component } from "react";
import SideBar from "../../common/SideBar/SideBar";
import ProjectsTimeline from "./ProjectsTimeline/ProjectsTimeline";

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <SideBar />
        <div className="Site-main-area">
          <div className="Portfolio__main-section">
            <h1 className="Portfolio__title">Portfolio</h1>
            <p className="Portfolio__description">
              See my works below. Unless stated otherwise in their description,
              <span>
                all their back-end and front-end parts were completely done by
                me.
              </span>
            </p>
            <ProjectsTimeline />
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
