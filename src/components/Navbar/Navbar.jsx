import React, { useState } from "react";
import { Link } from "react-scroll";
import style from "./Navbar.module.css";
import logo from "../../assets/horizontalblack.png";

const Navbar = () => {
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
          Home
        </Link>
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
          to='Projects'
          spy={true}
          smooth={true}
          duration={800}
        >
          Projects
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
  );
};

export default Navbar;
