import React from "react";
import style from "./Vision.module.css";
import comillas from "../../assets/comillas.png";
import our from "../../assets/our.png";
import left from "../../assets/lefthand.png";
import right from "../../assets/righthand.png";
const Vision = () => {
  return (
    <section className={style.section} id='Vision'>
      <div className={style.contenedor}>
        <div className={style.columna1}>
          <div className={style.animaciones}>
            <div className={style.izquierda}>
              <img src={left} />
            </div>
            <div className={style.derecha}>
              <img src={right} />
            </div>
          </div>
          <img src={our} />
        </div>
        <div className={style.columna2}>
          <div className={style.comillas}>
            <img src={comillas} />
          </div>
          <div className={style.titulo}>
            <h1>Our Vision</h1>
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
