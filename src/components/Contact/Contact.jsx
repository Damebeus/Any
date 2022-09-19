import React, { useEffect } from "react";
import style from "./Contact.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";

import Aos from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  const [state, handleSubmit] = useForm("xqkjzvoq");
  if (state.succeeded) {
    Swal.fire("Message sent!", "thanks you for contacting me.", "success").then(
      () => {
        window.location.reload();
      }
    );
  }
  const { t, i18n } = useTranslation("global");

  return (
    <section className={style.section} id='Contact'>
      <div className={style.espacio}></div>
      <div className={style.container}>
        <div className={style.titulo}>
          <h1> {t("Contacto.Titulo")}</h1>
        </div>
        <div className={style.columnas}>
          <div className={style.formInput}>
            <form onSubmit={handleSubmit}>
              <div className={style.nombres}>
                <div className={style.formGroup} data-aos='fade-right'>
                  <input type='text' id='name' required />
                  <label htmlFor='name'>{t("Contacto.Nombre")}</label>
                </div>
                <div className={style.formGroup} data-aos='fade-left'>
                  <input type='text' id='lastname' required />
                  <label htmlFor='lastname'>{t("Contacto.Apellido")}</label>
                </div>
              </div>

              <div className={style.contacto}>
                <div className={style.formGroup} data-aos='fade-right'>
                  <input type='tel' id='number' required />
                  <label htmlFor='number'>{t("Contacto.Numero")}</label>
                </div>
                <div className={style.formGroup} data-aos='fade-left'>
                  <input type='text' id='Email' required />
                  <label htmlFor='Email'>{t("Contacto.Correo")}</label>
                  <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                  />
                </div>
              </div>
              <br />
              <br />
              <div className={style.formGroup} data-aos='fade-up'>
                <textarea id='message' name='message' rows={8} required />
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                />

                <label htmlFor='message'> {t("Contacto.Mensaje")} </label>
              </div>
              <div className={style.boton} /* data-aos='fade-right' */>
                <button type='submit' disabled={state.submitting}>
                  <span>{t("Contacto.Boton")}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
