import React, { Component } from "react";
import Samrat from "../../assets/images/samrat.jpg";
class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
        <div className="SideBar__inner">
          <div className="SideBar__person">
            <div className="SideBar__person__avatar-wrapper">
              <img src={Samrat} className="SideBar__person__avatar" alt="" />
            </div>
            <div className="SideBar__person__content">
              <h1 className="SideBar__person__content__title">
                Samrat Luintel
              </h1>
              <h2 className="SideBar__person__content__sub-title">
                Full-stack Web Developer
              </h2>
            </div>
          </div>

          <div className="SideBar__main-navigation">
            <ul className="SideBar__navigation-links-lists">
              <li className="SideBar__navigation-link SideBar__navigation-link--selected">
                Portfolio <span />
              </li>
              <li className="SideBar__navigation-link">
                Skills & offer
                <span />
              </li>
              <li className="SideBar__navigation-link">
                Contact Me <span />
              </li>
            </ul>

            <ul className="SideBar__navigation-links-lists SideBar__navigation-links-lists--top-margin">
              <li className="SideBar__navigation-link">
                My CV <span />
              </li>
            </ul>
          </div>

          <div className="SideBar__social-block">
            <div className="SideBar__social-block__title">Get in touch</div>
            <div className="SideBar__social-icons-lists">
              <div className="SideBar__social-icon">
                <i className="fas fa-envelope" />
              </div>
              <div className="SideBar__social-icon">
                <i className="fab fa-linkedin" />
              </div>
              <div className="SideBar__social-icon">
                <i className="fab fa-github-square" />
              </div>
              <div className="SideBar__social-icon">
                <i className="fab fa-facebook-square" />
              </div>
              <div className="SideBar__social-icon">
                <i className="fab fa-twitter-square" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SideBar;
