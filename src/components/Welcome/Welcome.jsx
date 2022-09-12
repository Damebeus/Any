import React from "react";
import { Link } from "react-scroll";
import video from "../../assets/bgv.mp4";
import style from "./Welcome.module.css";
const Welcome = () => {
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
            <h2>committed to your work</h2>
          </div>
          <div className={style.titulo}>
            <h1>SOFTWARE ENGINEER</h1>
          </div>
          <div className={style.dinamico}>
            <ul>
              <li>security</li>
              <li>dedication</li>
              <li>quality</li>
            </ul>
          </div>
          <div className={style.boton}>
            <Link to='About' spy={true} smooth={true} duration={800}>
              <button>
                <span>read more</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
