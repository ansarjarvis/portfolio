import React from "react";
import About from "./components/about/About";
import Experiance from "./components/experiance/Experiance";
import Header from "./components/header/Header";
import NavBar from "./components/nav/NavBar";

const App = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <NavBar></NavBar>
      <About></About>
      <Experiance></Experiance>
    </React.Fragment>
  );
};

export default App;
