import React from "react";
import { Link } from "react-scroll";
import video from "../../assets/bgv.mp4";
import style from "./Welcome.module.css";
import { useTranslation } from "react-i18next";

const Welcome = () => {
  const { t, i18n } = useTranslation("global");

  return (
    <section className={style.section} id='Home'>
      <div className={style.contenedor}>
        <div className={style.contVideo}>
          <video
            className={style.video}
            autoPlay
            loop
            muted
            src={video}
            type='video/mp4'
          />
        </div>
        <div className={style.subcontenedor}>
          <div className={style.slogan}>
            <h2> {t("Welcome.Subtitulo")}</h2>
          </div>
          <div className={style.titulo}>
            <h1>{t("Welcome.Titulo")}</h1>
          </div>
          <div className={style.dinamico}>
            <ul>
              <li>{t("Welcome.Seguridad")}</li>
              <li>{t("Welcome.Dedicacion")}</li>
              <li>{t("Welcome.Calidad")}</li>
            </ul>
          </div>
          <div className={style.boton}>
            <Link to='About' spy={true} smooth={true} duration={800}>
              <button>
                <span>{t("Welcome.Boton")}</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
