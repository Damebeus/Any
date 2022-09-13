import React from "react";
import style from "./Servicios.module.css";
import engranaje from "../../assets/engranaje.png";
const Servicios = () => {
  return (
    <section className={style.section} id='Servicios'>
      <div className={style.espacio}></div>

      <div className={style.container}>
        <div className={style.titulo}></div>

        <div className={style.subcontainer}>
          <div className={style.columna1}>
            <h1>Nuestros servicios</h1>
            <div className={style.item}>
              <h2>Ingenieria de Software</h2>
              <span>
                lorem Ips incorrectly interpreted text lorem Ips incorrectly
                interpreted text lorem Ips incorrectly interpreted text lorem
                Ips incorrectly interpreted text
              </span>
            </div>
            <div className={style.item}>
              <h2>Seguridad informatica</h2>
              <span>
                {" "}
                lorem Ips incorrectly interpreted text lorem Ips incorrectly
                interpreted text lorem Ips incorrectly interpreted text lorem
                Ips incorrectly interpreted text
              </span>
            </div>
            <div className={style.item}>
              <h2>Mantenimiento de programas</h2>
              <span>
                {" "}
                lorem Ips incorrectly interpreted text lorem Ips incorrectly
                interpreted text lorem Ips incorrectly interpreted text lorem
                Ips incorrectly interpreted text
              </span>
            </div>
          </div>
          <div className={style.columna2}>
            <img src={engranaje} />
          </div>
          <div className={style.columna3}>
            <div className={style.item}>
              <h2>Diseño web</h2>
              <span>
                lorem Ips incorrectly interpreted text lorem Ips incorrectly
                interpreted text lorem Ips incorrectly interpreted text lorem
                Ips incorrectly interpreted text
              </span>
            </div>
            <div className={style.item}>
              <h2>Trabajos Personalizados</h2>
              <span>
                {" "}
                lorem Ips incorrectly interpreted text lorem Ips incorrectly
                interpreted text lorem Ips incorrectly interpreted text lorem
                Ips incorrectly interpreted text
              </span>
            </div>
            <div className={style.item}>
              <h2>Mantenimiento y actualizacion</h2>
              <span>
                {" "}
                lorem Ips incorrectly interpreted text lorem Ips incorrectly
                interpreted text lorem Ips incorrectly interpreted text lorem
                Ips incorrectly interpreted text
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
