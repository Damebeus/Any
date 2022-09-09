import React from "react";
import style from "./About.module.css";
import logo from "../../assets/blacklogo.png";
const About = () => {
  return (
    <section className={style.section} id='About'>
      <div className={style.espacio}></div>
      <div className={style.container}>
        <div className={style.info}>
          <div className={style.subtitulo}>
            <h2>we offer the confidence you need</h2>
          </div>
          <div className={style.titulo}>
            <h1>Any cpu technology</h1>
          </div>
          <div className={style.lorem}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <span>Lorem ipsum </span>
            dolor sit amet consectetur adipisicing elit. Vel iste expedita magni
            quod, id dolorem, et doloribus, praesentium excepturi laboriosam
            consequatur quibusdam natus cupiditate repellat molestiae
            dignissimos sapiente impedit earum.
          </div>
          <div className={style.boton}>
            <button>
              <span>Contact me</span>
            </button>
          </div>
        </div>
        <div className={style.foto}>
          <img src={logo} />
        </div>
      </div>
    </section>
  );
};

export default About;
