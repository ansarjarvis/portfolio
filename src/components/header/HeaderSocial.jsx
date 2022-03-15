import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import classes from "./HeaderSocial.module.css";

const HeaderSocial = () => {
  return (
    <div className={classes.header__socials}>
      <a href="https://github.com/ansarjarvis" target="_blank">
        <BsGithub></BsGithub>
      </a>
      <a href="https://github.com/ansarjarvis" target="_blank">
        <AiFillInstagram></AiFillInstagram>
      </a>
      <a href="https://github.com/ansarjarvis" target="_blank">
        <AiFillTwitterCircle></AiFillTwitterCircle>
      </a>
    </div>
  );
};

export default HeaderSocial;
