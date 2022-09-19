import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import style from "./Vision.module.css";
import comillas from "../../assets/comillas.png";
import our from "../../assets/our.png";
import left from "../../assets/lefthand.png";
import right from "../../assets/righthand.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Vision = () => {
  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    Aos.init({ duration: 3000, once: true });
  }, []);

  return (
    <section className={style.section} id='Vision'>
      <div className={style.contenedor}>
        <div className={style.columna1}>
          <div className={style.animaciones} data-aos='fade-up'>
            <div className={style.izquierda}>
              <img src={left} />
            </div>
            <div className={style.derecha}>
              <img src={right} />
            </div>
          </div>
          <div className={style.our}>
            <img src={our} />
          </div>
        </div>
        <div className={style.columna2} data-aos='fade-left'>
          <div className={style.comillas}>
            <img src={comillas} />
          </div>
          <div className={style.titulo}>
            <h1> {t("Vision.Titulo")}</h1>
          </div>
          <div className={style.subtitulo}>
            "lorem ipsum dolor sit amet, consectetur adip occ occurence velit "
          </div>
          <div className={style.parrafo}>
            <p>
              Lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet,
              consectetur Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Illo cupiditate fugiat eius nisi mollitia nulla amet odio
              alias est culpa eum repellat, voluptates quasi ex, quo ad
              repudiandae illum voluptatem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
