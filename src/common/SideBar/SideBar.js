import React, { Component } from "react";
import Samrat from "../../assets/images/samrat.jpg";
import classnames from "classnames";
import { withRouter } from "react-router-dom";

class SideBar extends Component {
  state = {
    sideBarExtended: false
  };

  toggleSideBarExtended = () => {
    this.setState(prevState => ({
      sideBarExtended: !prevState.sideBarExtended
    }));
  };

  render() {
    console.log("From side bar", this.props.location.pathname);
    return (
      <div className="SideBar">
        <div className="SideBar__inner">
          <div className="SideBar__person">
            <div className="SideBar__person__content">
              <h1 className="SideBar__person__content__title">
                Samrat Luintel
              </h1>
              <h2 className="SideBar__person__content__sub-title">
                Full-stack Web Developer
              </h2>
            </div>
          </div>

          <div
            className={classnames({
              "SideBar__main-navigation": true,
              "SideBar__main-navigation--extended": this.state.sideBarExtended
            })}
          >
            <div className="SideBar__navigation-extend-bar">
              <div className="SideBar__social-icons-lists">
                <div className="SideBar__social-icon SideBar__social-icon--small">
                  <i className="fas fa-envelope" />
                </div>
                <div className="SideBar__social-icon SideBar__social-icon--small">
                  <i className="fab fa-linkedin" />
                </div>
                <div className="SideBar__social-icon SideBar__social-icon--small">
                  <i className="fab fa-github-square" />
                </div>
                <div className="SideBar__social-icon SideBar__social-icon--small">
                  <i className="fab fa-facebook-square" />
                </div>
                <div className="SideBar__social-icon SideBar__social-icon--small">
                  <i className="fab fa-twitter-square" />
                </div>
              </div>

              <div
                className="SideBar__extend-btn"
                onClick={this.toggleSideBarExtended}
              >
                <i className="fas fa-bars" />
              </div>
            </div>
            <div className="SideBar__navigation-extendable">
              <ul className="SideBar__navigation-links-lists">
                <li
                  className={classnames({
                    "SideBar__navigation-link": true,
                    "SideBar__navigation-link--selected":
                      this.props.location.pathname === "/portfolio"
                  })}
                  onClick={() => this.props.history.push("/portfolio")}
                >
                  Portfolio <span />
                </li>
                <li
                  className={classnames({
                    "SideBar__navigation-link": true,
                    "SideBar__navigation-link--selected":
                      this.props.location.pathname === "/skills"
                  })}
                  onClick={() => this.props.history.push("/skills")}
                >
                  Skills & offer
                  <span />
                </li>
                <li
                  onClick={() => this.props.history.push("/contact")}
                  className="SideBar__navigation-link"
                >
                  Contact Me <span />
                </li>
              </ul>

              <ul className="SideBar__navigation-links-lists SideBar__navigation-links-lists--top-margin">
                <li className="SideBar__navigation-link">
                  My CV <span />
                </li>
              </ul>
            </div>
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
              <a
                href="https://github.com/SamratLuintel"
                className="SideBar__social-icon"
                target="_blank"
              >
                {" "}
                <i className="fab fa-github-square" />
              </a>

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
export default withRouter(SideBar);
