import React, { Component } from "react";
import SideBar from "../../common/SideBar/SideBar";
import MainSkills from "./MainSkills/MainSkills";
import FrontEnd from "./FrontEnd/FrontEnd";
import BackEnd from "./BackEnd/BackEnd";

class Skills extends Component {
  render() {
    return (
      <div className="Skills">
        <SideBar />
        <div className="Site-main-area">
          <div className="Skills__main-section">
            <MainSkills />
            <hr className="Skills__hr" />
            <FrontEnd />
            <hr className="Skills__hr" />
            <BackEnd />
          </div>
        </div>
      </div>
    );
  }
}
export default Skills;
