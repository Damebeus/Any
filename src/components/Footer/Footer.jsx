import React from "react";
import { Link } from "react-scroll";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <section className={style.section} id='Footer'>
      <div className={style.container}>
        <div className={style.gradiante}>
          <div className={style.info}>
            <div className={style.subtitulo}>
              <h1>ANY CPU TECHNOLOGY</h1>
              <h2>
                Con mas de 10 años de experiencia, buscando la solucion mas
                optima a los problemas de los clientes
              </h2>
            </div>
            <div className={style.contacto}>
              <ul>
                <li>Telefono : +12 34567898</li>
                <li>Email: anytechno@gmail.com</li>
                <li>Direccion: Avenida Siempreviva 123</li>
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
              to='About'
              spy={true}
              smooth={true}
              duration={800}
            >
              About
            </Link>
            <Link
              activeClass={style.selectedLink}
              className={style.links}
              to='Servicios'
              spy={true}
              smooth={true}
              duration={800}
            >
              Services
            </Link>
            <Link
              activeClass={style.selectedLink}
              className={style.links}
              to='Preguntas'
              spy={true}
              smooth={true}
              duration={800}
            >
              Questions
            </Link>
            <Link
              activeClass={style.selectedLink}
              className={style.links}
              to='Contact'
              spy={true}
              smooth={true}
              duration={800}
            >
              Contact
            </Link>
          </div>
        </div>
        <p>© Any technology 2022. Todos los derechos reservados</p>
      </div>
    </section>
  );
};

export default Footer;
