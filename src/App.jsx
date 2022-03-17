import React from "react";
import About from "./components/about/About";
import Contect from "./components/contect/Contect";
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
      <Contect></Contect>
    </React.Fragment>
  );
};

export default App;
