import React, { useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import classes from "./Contact.module.css";
import emailjs from "emailjs-com";

const Contect = () => {
  const formRef = useRef();
  const formSubmitHandler = (event) => {
    event.preventDefault();
    emailjs.sendForm(
      "service_203zkkp",
      "template_4px5txp",
      formRef.current,
      "qZW2Q_sbOsVGFMcIK"
    );
    event.target.reset();
  };
  return (
    <section id="contect">
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className={classes.contact__options}>
          <article className={classes.contact__option}>
            <AiOutlineMail></AiOutlineMail>
            <h4>Email</h4>
            <a href="mailto:ajarvis4109@gmail.com">Send a message</a>
          </article>
          <article className={classes.contact__option}>
            <BsWhatsapp></BsWhatsapp>
            <h4>WhatsApp</h4>
            <a href="http://api.whatsapp.com/send?phone=+919821341563">
              Send a message
            </a>
          </article>
        </div>
        <form onSubmit={formSubmitHandler} ref={formRef}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            placeholder="Your Message"
            name="message"
            required
            cols="20"
            rows="10"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contect;
