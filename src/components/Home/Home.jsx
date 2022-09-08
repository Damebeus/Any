import React from "react";
import About from "../About/About";
import Navbar from "../Navbar/Navbar";
import Welcome from "../Welcome/Welcome";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <About />
    </div>
  );
};

export default Home;
