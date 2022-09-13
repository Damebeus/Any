import React from "react";
import style from "./Clientes.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Clientes = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };
  return (
    <div className={style.container}>
      <h2> Nuestros clientes </h2>
      <Slider {...settings}>
        <div className={style.item}>
          <div className={style.info}></div>
        </div>
        <div className={style.item}>
          <div className={style.info}></div>
        </div>
        <div className={style.item}>
          <div className={style.info}></div>
        </div>
        <div className={style.item}>
          <div className={style.info}></div>
        </div>
        <div className={style.item}>
          <div className={style.info}></div>
        </div>
        <div className={style.item}>
          <div className={style.info}></div>
        </div>
        <div className={style.item}>
          <div className={style.info}></div>
        </div>
        <div className={style.item}>
          <div className={style.info}></div>
        </div>
        <div className={style.item}>
          <div className={style.info}></div>
        </div>
        <div className={style.item}>
          <div className={style.info}></div>
        </div>
        <div className={style.item}>
          <div className={style.info}></div>
        </div>
        <div className={style.item}>
          <div className={style.info}></div>
        </div>
      </Slider>
    </div>
  );
};

export default Clientes;
