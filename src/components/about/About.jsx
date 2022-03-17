import React from "react";
// import meImage from "../../assets/me-about.jpg";
// import meImage from "../../assets/alone.jpg";
import aboutImage from "../../assets/about.svg";
import { GiAchievement } from "react-icons/gi";
import classes from "./About.module.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        {/* <div className={classes.about__me}>
          <div className={classes.about__me_image}>
            <img src={aboutImage} alt="" />
          </div>
        </div> */}
        <img src={aboutImage} alt="" />

        <div className={classes.about__content}>
          <div className={classes.about__cards}>
            {/* <article className={classes.about__card}>
              <GiAchievement className="about__icon"></GiAchievement>
              <h5>Experiance</h5>
            </article> */}
            {/* <article className={classes.about__card}>
              <GiAchievement className="about__icon"></GiAchievement>
              <h5>clients</h5>
            </article> */}
            <article className={classes.about__card}>
              <GiAchievement className="about__icon"></GiAchievement>
              <h5>Placeholer</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Necessitatibus dicta quas quis, cumque corrupti odio. Officiis
                consectetur cupiditate iste sunt dolorum porro esse, in animi
                quisquam, autem, magnam est exercitationem.
              </p>
            </article>
          </div>
          <a href="#contect" className="btn btn-primary">
            Contect Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
