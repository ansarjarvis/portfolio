import React from "react";
import About from "./components/about/About";
import Header from "./components/header/Header";
import NavBar from "./components/nav/NavBar";

const App = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <NavBar></NavBar>
      <About></About>
    </React.Fragment>
  );
};

export default App;
