import React from "react";
import video from "../../assets/bgv.mp4";
import style from "./Welcome.module.css";
const Welcome = () => {
  return (
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
      <div className={style.subcontainer}>
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
          <button>
            <span>read more</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
