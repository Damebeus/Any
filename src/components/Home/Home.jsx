import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import Vision from "../Vision/Vision";
import Welcome from "../Welcome/Welcome";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <About />
      <Vision />
      <Contact />
    </div>
  );
};

export default Home;
