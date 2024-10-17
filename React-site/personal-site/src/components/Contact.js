import Image from "../images/contact-picture.jpg";
import { useState, useEffect, useRef } from "react";
import * as yup from "yup";
import emailjs from '@emailjs/browser';

const initialValues = {
  user_name: "",
  user_email: "",
  user_contact: "",
  message: "",
};

const validationError = {
  nameValid: "Name must be at least 3-20 characters",
  emailValid: "Must be a valid email address",
  messageValid: "Must have a message to send",
};

const schema = yup.object().shape({
  user_name: yup
    .string()
    .min(3, validationError.nameValid)
    .max(20, validationError.nameValid)
    .trim(),
  user_email: yup
    .string()
    .email(validationError.emailValid)
    .required("Email is required")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email format"
    ),
  message: yup.string().required(validationError.messageValid).trim(),
  user_contact: yup.string(),
});

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({ user_name: "", user_email: "", message: "" });
  const [enabled, setEnabled] = useState(false);
  const form = useRef();

  useEffect(() => {
    schema.isValid(values).then((isValid) => {
      setEnabled(isValid);
    });
  }, [values]);

  const validate = (key, value) => {
    yup
      .reach(schema, key)
      .validate(value)
      .then(() => {
        setErrors({ ...errors, [key]: "" });
      })
      .catch((error) => {
        setErrors({ ...errors, [key]: error.errors[0] });
      });
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    validate(name, value);
    setValues({ ...values, [name]: value });
  };  

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
    .sendForm('service_2yd90qp', 'contact_form', form.current, {
      publicKey: 'tuRRgrWeN8y8fj60r',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
    setValues(initialValues)
    }

  return (
    <>
      <div className="contact-section">
        <div className="header-image">
          <img
            className="image"
            src={Image}
            alt="Michael Wilcox and Daughter"
          />
        </div>

        <h1>Contact Me</h1>

        <h3>
          Email:{" "}
          <a className="contact-link" href="mailto: webdev.krygore@gmail.com">
            webdev.krygore@gmail.com
          </a>
        </h3>
        <h3>
          Phone:{" "}
          <a className="contact-link" href="tel:13602716385">
            (360)271-6385
          </a>
        </h3>
        <h3>
          LinkedIn:{" "}
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/webdev-michael/"
          >
            Michael Wilcox
          </a>
        </h3>
        <h3>
          GitHub:{" "}
          <a className="contact-link" href="https://github.com/WebDev-Michael">
            WebDev Michael
          </a>
        </h3>

        <h3>
            Location:{" "} 
            <a className="contact-link-b" href="https://www.google.com/maps/place/Belfair,+WA+98528/@47.4454523,-122.8372521,13z/data=!4m6!3m5!1s0x5491b57fe2ea4171:0xfc897ccbce6e839d!8m2!3d47.4514588!4d-122.826946!16zL20vMDU1dDRs?entry=ttu">
                Belfair, WA 98528
            </a>
            </h3>

        {/* <div className="form-section">
          <h2>Send Me A Message!</h2>
          <form onSubmit={sendEmail}>
            <div className="inputs">
              <label htmlFor="name">Your Name</label>
              <div>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Enter Your Name"
                  value={values.user_name}
                  onChange={handleChange}
                />
              </div>
            </div>
            {errors.name && <div className="error">{errors.name}</div>}

            <div className="inputs">
              <label htmlFor="email">Your Email</label>
              <div>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Enter Your Email"
                  value={values.user_email}
                  onChange={handleChange}
                />
              </div>
            </div>
            {errors.email && <div className="error">{errors.email}</div>}

            <div className="inputs">
              <label htmlFor="phone">
                Your Phone Number (<span>OPTIONAL</span>)
              </label>
              <div>
                <input
                  type="text"
                  id="phone"
                  name="user_contact"
                  placeholder="Enter Your Phone Number"
                  value={values.user_contact}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="inputs">
              <label htmlFor="message">Your Message</label>
              <div>
                <textarea
                  type="textarea"
                  id="message"
                  name="message"
                  placeholder="Enter Your Message"
                  value={values.message}
                  onChange={handleChange}
                />
              </div>
            </div>
            {errors.message && <div className="error">{errors.message}</div>}

            <input type="submit" disabled={!enabled} value="Send" />
          </form>
        </div> */}
      </div>
    </>
  );
}
