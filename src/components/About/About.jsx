import React, { useEffect } from "react";
import style from "./About.module.css";
import logo from "../../assets/blacklogo.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

const About = () => {
  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <section className={style.section} id='About'>
      <div className={style.espacio}></div>
      <div className={style.container}>
        <div className={style.info} data-aos='fade-right'>
          <div className={style.subtitulo}>
            <h2> {t("About.Slogan")}</h2>
          </div>
          <div className={style.titulo}>
            <h1>Any cpu technology</h1>
          </div>
          <div className={style.lorem}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <span>Lorem ipsum </span>
            dolor sit amet consectetur adipisicing elit. Vel iste expedita magni
          </div>
          <div className={style.boton}>
            <Link to='Contact' spy={true} smooth={true} duration={800}>
              <button>
                <span>{t("About.Boton")}</span>
              </button>
            </Link>
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
