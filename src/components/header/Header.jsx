import React from "react";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";
import myImg from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="container header__container">
        <h5>Hy ! I'm</h5>
        <h1>Mohammad Ansar</h1>
        <h5>Full-Stack MERN Developer</h5>
        <HeaderButton></HeaderButton>
        <div className={classes.me}>
          <img src={myImg} alt="me" />
        </div>
        <a href="#contect" className={classes.scroll__down}>
          Scroll Down
        </a>
        <HeaderSocial></HeaderSocial>
      </div>
    </header>
  );
};

export default Header;
