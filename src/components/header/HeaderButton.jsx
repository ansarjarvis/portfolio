import React from "react";
import classes from "./HeaderButton.module.css";
import cv from "../../assets/cv.pdf";

const HeaderButton = () => {
  return (
    <div className={classes.headerButton}>
      <a href={cv} download className="btn">
        Download Resume
      </a>
      <a href="#contect" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default HeaderButton;
