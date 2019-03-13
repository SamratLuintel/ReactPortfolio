import React, { Component } from "react";
import EMM from "../../../assets/images/projects/emm.png";
import Social from "../../../assets/images/projects/social.png";
import Game from "../../../assets/images/projects/game.png";
import Stock from "../../../assets/images/projects/stock.png";
import Ecommerce from "../../../assets/images/projects/ecommerce.png";
import LearnIT from "../../../assets/images/projects/learnit.png";

import SingleProjectCard from "./SingleProjectCard/SingleProjectCard";

class ProjectsTimeline extends Component {
  render() {
    return (
      //make sure to put first props on first SingleProjectCard component
      <div className="ProjectsTimeline">
        <div className="ProjectsTimeline__projects-lists">
          <SingleProjectCard
            title="Samrat Mart"
            subtitle="Ecommerce site created from scratch"
            description="Complete electronic gadget ecommerce site with admin panel"
            bulletsInfo={[
              "Dashboard page with different kinds of data visualization to show about the sales",
              "Server side product cart",
              "Comment and rate a product",
              "Admin panel to create and manage product of different categories"
            ]}
            technologies={[
              "react",
              "redux",
              "nodejs",
              "express",
              "mongodb",
              "bem+scss",
              "d3.js"
            ]}
            first
            date="2017-2018"
            github="https://github.com/SamratLuintel/Ecommerce"
            link="https://samrat-mart.herokuapp.com"
            image={Ecommerce}
          />
          <SingleProjectCard
            title="Social Network"
            subtitle="with live chat"
            description="Here comes the social networking platform that you’ve been waiting for"
            bulletsInfo={[
              "Create post,share images and see the activity of other users",
              "group chat and private chat features",
              "customize your user profile",
              "know whether your friends are online or offline"
            ]}
            technologies={[
              "react",
              "redux",
              "nodejs",
              "express",
              "mongodb",
              "bem+scss",
              "socket.io"
            ]}
            github="https://github.com/SamratLuintel/Chat-App"
            link="https://samrat-chat-app.herokuapp.com/"
            date="2017-2018"
            image={Social}
          />
          <SingleProjectCard
            title="Meteor Shower"
            subtitle="Avoid the meteor"
            description="Video game made in Unity "
            bulletsInfo={[
              "It is an action, endless driving game",
              "Control a car in meteor falling world, avoid the meteor while not crashing into any earthy obstacles"
            ]}
            technologies={["C#", "Unity"]}
            date="2016-2017"
            github="https://samrat.itch.io/meteor-shower"
            link="https://www.youtube.com/watch?v=tCCqXXS6nJs"
            image={Game}
          />
          <SingleProjectCard
            title="Stock Ma"
            subtitle="Get all info about stocks"
            description="The future of stock is here.A platform for managing your favourite companies stocks"
            bulletsInfo={[
              "Follow your favourite companies,involve in group chat and get to know about their market status.",
              "Stock data shown in graphs and table.",
              "Dark and Light theme for different day cycles.",
              "News section to know about ungoing changes in stock market"
            ]}
            additionalDescription="This project was a part of Chingu Voyage 7 (better explained in github). I was mainly responsible for:"
            additionalBulletsInfo={[
              "Whole front end of the application",
              "showing the stock info in table and chart from their respective apis",
              "Backend and frontend of discussion page"
            ]}
            technologies={[
              "react",
              "redux",
              "nodejs",
              "express",
              "mongodb",
              "bem+scss",
              "socket.io",
              "d3.js"
            ]}
            github="https://github.com/chingu-voyage7/Bears-Team-06"
            link="https://stockma.herokuapp.com/"
            date="2016-2017"
            image={Stock}
          />
          <SingleProjectCard
            title="EMM-Email Manager"
            subtitle="Create beautiful emails"
            description="EMM is the easiest,quickest way to design elegant,mobile
            responsive emails. It serves as:"
            bulletsInfo={[
              "a SaaS platform for business operators to keep the track of their customers and mass send the email",
              "an online email builder that allows the user to create a customized email template."
            ]}
            technologies={[
              "react",
              "redux",
              "nodejs",
              "express",
              "mongodb",
              "bem+scss"
            ]}
            github="https://github.com/SamratLuintel/Newsletter-Manager"
            link="https://emm-samrat.herokuapp.com/"
            date="2016-2017"
            image={EMM}
          />

          <SingleProjectCard
            title="Learn It"
            subtitle="We are a roadmap"
            description="Job market around the world is changing. It is a site to narrow the skill gap between graduates and industry "
            bulletsInfo={[
              "Various necessary cs fundamentals shown in sunburst",
              "Forum to discuss the trending topic, issue, problems among the enthusiastic learners",
              "Paginated practise sets on various topics",
              "Detail roadmap on various domain of software engineering, info on major online courses etc"
            ]}
            additionalDescription="This project is a part of month long hackanthon.I was mainly responsible for:"
            additionalBulletsInfo={[
              "Creating the Landing page",
              "Complete front end and backend of forum",
              "Sunburst data visualization",
              "Practise set page with it's backend"
            ]}
            technologies={[
              "react",
              "redux",
              "nodejs",
              "express",
              "mongodb",
              "bem+scss"
            ]}
            date="2016-2017"
            github="https://github.com/Anshul2166/Harvard_Edu_Portal"
            link="https://harvardhacklearnit.herokuapp.com/"
            image={LearnIT}
          />
        </div>
      </div>
    );
  }
}

//EMM is an online email manager that allows the user to create
//a customized email template,keep track of user and send it.
export default ProjectsTimeline;
