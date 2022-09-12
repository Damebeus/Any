import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Preguntas from "../Preguntas/Preguntas";
import Vision from "../Vision/Vision";
import Welcome from "../Welcome/Welcome";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <About />
      <Vision />
      <Preguntas />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
