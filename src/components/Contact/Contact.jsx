import React from "react";
import style from "./Contact.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";

const Contact = () => {
  const [state, handleSubmit] = useForm("xqkjzvoq");
  if (state.succeeded) {
    Swal.fire("Message sent!", "thanks you for contacting me.", "success").then(
      () => {
        window.location.reload();
      }
    );
  }

  return (
    <section className={style.section} id='Contact'>
      <div className={style.espacio}></div>
      <div className={style.container}>
        <div className={style.titulo}>
          <h1>Contact</h1>
        </div>
        <div className={style.columnas}>
          <div className={style.formInput}>
            <form onSubmit={handleSubmit}>
              <div className={style.nombres}>
                <div className={style.formGroup}>
                  <input type='text' id='name' required />
                  <label htmlFor='name'>Name</label>
                </div>
                <div className={style.formGroup}>
                  <input type='text' id='lastname' required />
                  <label htmlFor='lastname'>Last name</label>
                </div>
              </div>

              <div className={style.contacto}>
                <div className={style.formGroup}>
                  <input type='tel' id='number' required />
                  <label htmlFor='number'>Number</label>
                </div>
                <div className={style.formGroup}>
                  <input id='email' type='email' name='email' required />
                  <label htmlFor='email'>Email </label>
                  <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                  />
                </div>
              </div>
              <br />
              <br />
              <div className={style.formGroup}>
                <textarea id='message' name='message' rows={8} required />
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                />

                <label htmlFor='message'> Message </label>
              </div>
              <div className={style.boton}>
                <button type='submit' disabled={state.submitting}>
                  <span>Send</span>
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
