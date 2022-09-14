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
    <section className={style.section} id='Clientes'>
      <div className={style.espacio}></div>

      <div className={style.container}>
        <h2> Nuestros clientes </h2>
        <Slider {...settings}>
          <div className={style.item}>
            <div className={style.info}>
              <img
                src='https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80660_1280.png'
                height={100}
                width={100}
              />
            </div>
          </div>
          <div className={style.item}>
            <div className={style.info}>
              <img
                src='https://d500.epimg.net/cincodias/imagenes/2015/05/08/pyme/1431098283_691735_1431098420_noticia_normal.jpg'
                height={100}
                width={170}
              />
            </div>
          </div>
          <div className={style.item}>
            <div className={style.info}>
              <img
                src='https://static.vecteezy.com/system/resources/previews/000/604/768/non_2x/vector-business-and-consulting-people-logos-teamwork-logo-design-conce.jpg'
                height={100}
                width={170}
              />
            </div>
          </div>
          <div className={style.item}>
            <div className={style.info}>
              <img
                src='https://blog.hubspot.es/hs-fs/hubfs/ES%20Blog%20images/Los%2015%20logos%20m%C3%A1s%20creativos%20e%20inspiradores%20del%20mundo/logo_creativo_coca_cola.png?width=650&name=logo_creativo_coca_cola.png'
                height={100}
                width={170}
              />
            </div>
          </div>
          <div className={style.item}>
            <div className={style.info}>
              <img
                src='https://t2.uc.ltmcdn.com/es/posts/5/9/1/_50195_4_600.jpg'
                height={100}
                width={170}
              />
            </div>
          </div>
          <div className={style.item}>
            <div className={style.info}>
              <img
                src='https://www.lancetalent.com/blog/wp-content/uploads/Captura-de-pantalla-2016-08-15-a-las-14.54.58.png'
                height={100}
                width={170}
              />
            </div>
          </div>
          <div className={style.item}>
            <div className={style.info}>
              <img
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAnFBMVEX///8AAAAAmmYAklfz+fd9fX0hn26GhoaEhIQAlV3V1dXS0tL09PTk8eu728wAmGKr1MGx1sVhs4/l5eWzs7OoqKh2dnbMzMzz8/Ph4eFwcHC9vb28vLxhYWFqamqampovLy9RUVGenp6Njo7U6N8XFxcpKSk9PT2urq5MTEw4ODghISF6vZ/0+vfG4dQAiUURERFEqH5TrYdwuJg0Xw4SAAAGwElEQVR4nO2cbVviOBSGW5URFcbZFUHGcQAdX2fdnd39//9tCxSbPDknSZsAe+lzf4TQpjdtcs5JoCgIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghZL8cvR4l8rrvS9gef/51mMj5vi9hi/w4PEjj076vYJuk2nnXclLt6HKmvWOL/m2oK6N+07p3EdN57RPm68Dd7HI0iTr4kjQ7upxxiVwFetKzWg/CXb+2PnDavNF3zo3Mx6MoQ0l2dDluh44DHbEvaR7s+NQ+vCHnOChnycMswk+KHVXOpdCbVnLKRaD5FRy9tZyK58k27ahyHoSuXLaSU/b8ze8zyKlu0KCe7nY0OadiT9rJKb1D+CO27ianukNDo1tnO5qcr2I/rtvJ8bX/7jTuKqcsv23JjiZH7sVLSznlVGt757btLif0AHe1o8iRhmO4gCg52vT/5D92WznBwb+bHUXOT6UTN23l3IstJ9KxU+SUz9uwI8s5UzvhiyzE0O1RaHghHjpJjv9r62hHluOOlhv6beWU3512A/nQuhzjo1fT69sb8eN3+e2IcpTeQ0cj5bi9lkKoSDk1E+nbO8tuR5Rz65HjiV20jOjJbrZQmrWQU4XXgp6AnMqOl5M4Ob+scy5iu6Cmi1YQ6ya0XeRIg3oo9yuOhj6+OHYkOXBaiHn0iEvPpY1hfKY2aimnGDhTaqhs4OdzlBx7wDuGUoQeCHoKDW8R/je9TVs5bnY27malJkoOZMtTLC2oA59HzkPdRE7ZusrBvD6mhqQTJce+8ecF5ohqROErUS3kq0mTU4zgEP5i5Y8v3rej5NjnW5Yp4FnQAkFv/W7sHjpdDqb2D3rLohge/pYsB4bjgXtRWprnL27OiuIluxycsjwB/PDkJF2OPRyvnyHIoTvJKa/1uLuzHByTn9SGw5ODdDkwLEykF5VH25Zzv/C7qBKLDHIgMnBzlcZNBjkzsV834qteOaUz0wL96AK754pw+vO4ySDHPtcmL4JnWw4EUY53bqrmL8j9O8nBMV5xs0qrkuXYS0nNAGdHo/MoOd6oZu4URrrJgflKLD2u3aTLWVinaooxUBoUA0FHDqo2GWSSA6matBZRu0mWA2UoY/C33xADQVeOnkktb8kscmAiHQluNhedKkefs+0ESwwoBDlaDr76grPIgfKKO5e/uUmWY5/pq/EOTC1SICjJKZ4lN+tL2IYcZ91x2JS4EuXAGGE9wDDyCTmeKEeq1deFlyxy4MHFO8dwkyrn2dMpSLBmsXLcCX0zYO1gzDHdJMqB4RiuHy4xVg4+kE1BKIscWJq111gtN4lyoE8w6AbnBUWOU1nMKudFPQi6SZRjnwfXyeD5cMsDmhw7SGqUbyNCNiuluNyQJAdGFefWgATLibdUOWYcYCjIIceTWw1xKSZJzmOgS/B4OOvTupxiIRnPIQeedWN91XGTJAcHziAYCHrkFPP1a9YCXw450CXj+O5KS4qc8C5FAIv9PjnrRVS73JJBDiZvxqOeV05bN04g6JOzChNgU0EGOfNSbZlVDlbyI4BAyCunOJth3JguB7cRmXdmVjn+6rdMGzkuyXKcrSzmBJpTTuvheIk92+9ajrMZxNoplVNOD88Ugx0I7liOu1ZufVeCnM9d5XRxA4HgbuW4u89+Wu+7cg7+/l3hn+Va6FCVI+1gjMAKBHcp50rYC2zXbgU5B+cyh/+uPuHY2cjBOTEWMxDcnZxTqcAI9TdJjszJH/VH0E4tB1KUeTFQwBKBGQjuQs7gYnIpbyDHRDhazpsbx04tB74Jz48cMNMzAsGtyYkCdy7FyjHcVHbOBTn6FTvAA2hEdnuV41T8I+VYbsDOWg5Emt49vRhJ/z/kuKshcXLAjW1nLQciBv/vP6BbTUl7f3Lmwq0eJecQ3Vh2VnIiV+PlnjfRxd7kiDvHY+QIbkw7Kzkw/Ae2rGJG8xYI7knOg/xrlQg5opuiONrYWcrBHEX9HVDNwm7+Vmvei5xfwgJwpBzFTWNnKQeGY/+Pqgq3wrSRuQc5z/rwGJTjjMWmnfONnOitYxugh5tAcNdyHm99v+EJyfG42dj55G46DF6U89uIOv7qtTyOLidcsV3cXQc2HQfkeN3Udio5l+OeSfCPB6qsz/7EuL63R9bL4e3kU7u9+Y8E9gka+sd3t0/X05jN2H45ATdrO+/3vyy8coJuVnY+ppwIN0Xx+jHlRLmp7p13LEf/2VmcmypW3moH94r6l13v+K+4CCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEII+bD8B3cJd0Fx44pnAAAAAElFTkSuQmCC'
                height={100}
                width={170}
              />
            </div>
          </div>
          <div className={style.item}>
            <div className={style.info}>
              <img
                src='https://assets.iprofesional.com/assets/jpg/2020/02/490636.jpg?5.3.1-4'
                height={100}
                width={170}
              />
            </div>
          </div>
          <div className={style.item}>
            <div className={style.info}>
              <img
                src='https://www.socialancer.com/wp-content/uploads/2022/03/logo-azul.png'
                height={100}
                width={170}
              />
            </div>
          </div>
          <div className={style.item}>
            <div className={style.info}>
              <img
                src='https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/05/logo-lg.jpg?itok=YLbH76Hy'
                height={100}
                width={170}
              />
            </div>
          </div>
          <div className={style.item}>
            <div className={style.info}>
              <img
                src='https://www.ofifacil.com/portfolio/diseno-logo-design/logo-design-web-render/logo-empresa-informatica.jpg'
                height={100}
                width={170}
              />
            </div>
          </div>
          <div className={style.item}>
            <div className={style.info}>
              <img
                src='https://static-cse.canva.com/blob/211925/39-50-logotipos-que-te-inspiraran.png'
                height={100}
                width={150}
              />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Clientes;
