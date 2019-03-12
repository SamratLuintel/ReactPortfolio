import React, { Component } from "react";
import SideBar from "../../common/SideBar/SideBar";

class Contact extends Component {
  openLink = () => {};
  render() {
    return (
      <div className="Contact">
        <SideBar />
        <div className="Site-main-area">
          <div className="Contact__main-section">
            <h1 className="Contact__main-title">Contact Me</h1>
            <p className="Contact__small-paragraph">
              I am available for hire and open to any ideas of cooperation
            </p>
            <div className="Contact__card">
              <div className="Contact__single-card">
                <div className="Contact__single-card__header">Email</div>
                <div className="Contact__single-card__info">
                  <div className="Contact__single-card__link">
                    <i className="fas fa-envelope" />
                    ngc2058@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
