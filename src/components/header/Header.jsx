import React from "react";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";
// import myImg from "../../assets/me.png";
import myImg from "../../assets/headerImage.png";
// import myImg from "../../assets/headerImage2.svg";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="container header__container">
        <h5>Hello !!!! I'm</h5>
        <h1>Mohammad Ansar</h1>
        <h5>Full-Stack MERN Developer</h5>
        <HeaderButton></HeaderButton>
        {/* <div className={classes.me}>
          <img src={myImg} alt="me" />
        </div> */}
        <img className="header__img" src={myImg} alt="me" />

        <a href="#contect" className={classes.scroll__down}>
          Scroll Down
        </a>
        <HeaderSocial></HeaderSocial>
      </div>
    </header>
  );
};

export default Header;
