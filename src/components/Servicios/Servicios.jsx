import React from "react";
import style from "./Servicios.module.css";
import engranaje from "../../assets/engranaje.png";
import { useTranslation } from "react-i18next";

const Servicios = () => {
  const { t, i18n } = useTranslation("global");

  return (
    <section className={style.section} id='Servicios'>
      <div className={style.espacio}></div>

      <div className={style.container}>
        <div className={style.subcontainer}>
          <div className={style.columna1}>
            <h1>{t("Servicios.Titulo")}</h1>
            <div className={style.item}>
              <h2>{t("Servicios.Item1")}</h2>
              <span>
                lorem Ips incorrectly interpreted text lorem Ips incorrectly
                interpreted text lorem Ips incorrectly interpreted text lorem
                Ips incorrectly interpreted text
              </span>
            </div>
            <div className={style.item}>
              <h2>{t("Servicios.Item2")}</h2>
              <span>
                {" "}
                lorem Ips incorrectly interpreted text lorem Ips incorrectly
                interpreted text lorem Ips incorrectly interpreted text lorem
                Ips incorrectly interpreted text
              </span>
            </div>
            <div className={style.item}>
              <h2>{t("Servicios.Item3")}</h2>
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
              <h2>{t("Servicios.Item4")}</h2>
              <span>
                lorem Ips incorrectly interpreted text lorem Ips incorrectly
                interpreted text lorem Ips incorrectly interpreted text lorem
                Ips incorrectly interpreted text
              </span>
            </div>
            <div className={style.item}>
              <h2>{t("Servicios.Item5")}</h2>
              <span>
                {" "}
                lorem Ips incorrectly interpreted text lorem Ips incorrectly
                interpreted text lorem Ips incorrectly interpreted text lorem
                Ips incorrectly interpreted text
              </span>
            </div>
            <div className={style.item}>
              <h2>{t("Servicios.Item6")}</h2>
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
