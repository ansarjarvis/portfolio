import React from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { BiBookmarkAltMinus } from "react-icons/bi";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.navbar}>
      <a href="#" className="active">
        <AiFillHome></AiFillHome>
      </a>
      <a href="#about">
        <AiOutlineUserAdd></AiOutlineUserAdd>
      </a>
      <a href="#experiance">
        <BiBookmarkAltMinus></BiBookmarkAltMinus>
      </a>
      <a href="#contect">
        <AiFillMessage></AiFillMessage>
      </a>
    </nav>
  );
};

export default NavBar;
