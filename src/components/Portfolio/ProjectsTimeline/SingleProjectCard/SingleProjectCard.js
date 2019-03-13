import React, { Component } from "react";
import classnames from "classnames";

class SingleProjectCard extends Component {
  render() {
    const { props } = this;
    return (
      <div className="SingleProjectCard">
        <div
          className={classnames({
            SingleProjectCard__date: true,
            "SingleProjectCard__date--first": props.first
          })}
        >
          <time className="SingleProjectCard__date-text">{props.date}</time>
        </div>
        <div
          className={classnames({
            SingleProjectCard__content: true,
            "SingleProjectCard__content--no-border": props.first
          })}
        >
          <div className="SingleProjectCard__content__project-text">
            <div className="SingleProjectCard__project-title">
              {props.title}
            </div>
            <div className="SingleProjectCard__project-subtitle">
              {props.subtitle}
            </div>
            <div className="SingleProjectCard__project-description">
              <p className="SingleProjectCard__project-description__paragraph">
                {props.description}
              </p>
              <ul className="SingleProjectCard__project-info-lists">
                {props.bulletsInfo.map(info => (
                  <li className="SingleProjectCard__project-info">{info}</li>
                ))}
              </ul>
            </div>
            {props.additionalDescription && (
              <p className="SingleProjectCard__project-description__paragraph">
                {props.additionalDescription}
              </p>
            )}
            {props.additionalBulletsInfo && (
              <ul className="SingleProjectCard__project-info-lists">
                {props.additionalBulletsInfo.map(info => (
                  <li className="SingleProjectCard__project-info">{info}</li>
                ))}
              </ul>
            )}
            <a
              href={props.github}
              target="_blank"
              className="SingleProjectCard__details-btn SingleProjectCard__details-btn--only-outline"
            >
              Git Repo
            </a>
            <a
              href={props.link}
              target="_blank"
              className="SingleProjectCard__details-btn"
            >
              View Live
            </a>

            <div className="SingleProjectCard__project-technologies">
              <div className="SingleProjectCard__project-technologies__title">
                Technologies
              </div>
              <ul className="SingleProjectCard__tech-tags">
                {props.technologies.map(name => (
                  <li className="SingleProjectCard__single-tech-tag">{name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="SingleProjectCard__image-section">
            <img
              src={props.image}
              className="SingleProjectCard__image-section__image"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}
export default SingleProjectCard;
