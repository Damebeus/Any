import React, { useState } from "react";
import { Link } from "react-scroll";
import style from "./Navbar.module.css";
import logo from "../../assets/horizontalblack.png";
import { useTranslation } from "react-i18next";

const Navbarr = () => {
  const { t, i18n } = useTranslation("global");
  const [navbar, setNavbar] = useState(false);
  const changeBgc = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBgc);

  return (
    <div className={navbar ? style.container : style.container2}>
      <div className={style.logo}>
        <img src={logo} />
      </div>
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
      <div className={style.mobile}></div>
      <nav class='navbar navbar-expand-lg bg-success  bg-success position-fixed top-0  w-100 '>
        <div class='container-fluid '>
          <a class='navbar-brand' href='#'>
            Menu
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse ' id='navbarNav'>
            <ul class='navbar-nav '>
              <button class='nav-item' className={style.boton}>
                <Link to='promociones'>
                  <a class='nav-link active' href='#'>
                    Promociones
                  </a>
                </Link>
              </button>
              <button class='nav-item' className={style.boton}>
                <Link to='empanadas'>
                  <a class='nav-link active' href='#'>
                    Empanadas
                  </a>
                </Link>
              </button>
              <button class='nav-item' className={style.boton}>
                <Link to='pizza'>
                  <a class='nav-link active' href='#'>
                    Pizzas
                  </a>
                </Link>
              </button>
              <button class='nav-item' className={style.boton}>
                <Link to='sanguches'>
                  <a class='nav-link active'>Milanesas</a>
                </Link>
              </button>
              <button class='nav-item' className={style.boton}>
                <Link to='lomitos'>
                  <a class='nav-link active'>Lomos</a>
                </Link>
              </button>
              <button class='nav-item' className={style.boton}>
                <Link to='burguer'>
                  <a class='nav-link active'>Hamburguesas</a>
                </Link>
              </button>
              <button class='nav-item' className={style.boton}>
                <Link to='Bebidas'>
                  <a class='nav-link active'>Bebidas</a>
                </Link>
              </button>
              <button class='nav-item' className={style.boton}>
                <a class='nav-link active' aria-current='page' href='/cart'>
                  Carrito
                </a>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbarr;
