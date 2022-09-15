import React from "react";
import { Link } from "react-scroll";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import style from "./Footer.module.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation("global");

  return (
    <section className={style.section} id='Footer'>
      <div className={style.container}>
        <div className={style.gradiante}>
          <div className={style.info}>
            <div className={style.subtitulo}>
              <h1>ANY CPU TECHNOLOGY</h1>
              <h2>{t("Footer.Experiencia")}</h2>
            </div>
            <div className={style.contacto}>
              <ul>
                <li> {t("Footer.Telefono")}</li>
                <li> {t("Footer.Email")}</li>
                <li>{t("Footer.Direccion")}</li>
              </ul>
            </div>
            <div className={style.botoncitos}>
              <a href='https://www.instagram.com/damian_ebeus/' target='_blank'>
                <AiOutlineInstagram />
              </a>
              <a
                href='https://www.linkedin.com/in/leandrogallo/'
                target='_blank'
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className={style.black}>
          <div className={style.botones}>
            <Link
              activeClass={style.selectedLink}
              className={style.links}
              to='Home'
              spy={true}
              smooth={true}
              duration={800}
            >
              {t("NavBar.Home")}
            </Link>
            <Link
              activeClass={style.selectedLink}
              className={style.links}
              to='About'
              spy={true}
              smooth={true}
              duration={800}
            >
              {t("NavBar.About")}
            </Link>
            <Link
              activeClass={style.selectedLink}
              className={style.links}
              to='Servicios'
              spy={true}
              smooth={true}
              duration={800}
            >
              {t("NavBar.Services")}
            </Link>
            <Link
              activeClass={style.selectedLink}
              className={style.links}
              to='Preguntas'
              spy={true}
              smooth={true}
              duration={800}
            >
              {t("NavBar.Questions")}
            </Link>
            <Link
              activeClass={style.selectedLink}
              className={style.links}
              to='Contact'
              spy={true}
              smooth={true}
              duration={800}
            >
              {t("NavBar.Contact")}
            </Link>
          </div>
        </div>
        <p>© Any technology 2022. Todos los derechos reservados</p>
      </div>
    </section>
  );
};

export default Footer;
