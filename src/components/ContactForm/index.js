import React from 'react';
// import PropTypes from 'prop-types';

import Field from 'src/components/Field';
import Button from 'src/components/Button';
import './contactForm.scss';

/**
 * Formulary to contact Admins
 */
const ContactForm = ({
  email,
  name,
  textarea,
  submitContact,
  updateContactField,
  isConnected,
}) => {
  // console.log(isConnected);
  const handleSubmit = (event) => {
    event.preventDefault();
    submitContact();
  };

  return (
    <div className="div-contactform">
      <section className="contactform-container">
        <h1 className="title">Contactez-nous !</h1>
        <form
          className="contactForm"
          onSubmit={(event) => {
            event.preventDefault();
            submitContact();
          }}
        >
          <Field
            identifier="email"
            placeholder="email@email.io"
            label="Votre e-mail"
            value={email}
            changeField={(identifier, newValue) => {
              updateContactField(identifier, newValue);
            }}
          />
          <Field
            identifier="name"
            placeholder="..."
            label="Votre nom"
            type="text"
            value={name}
            changeField={(identifier, newValue) => {
              updateContactField(identifier, newValue);
            }}
          />
          <Field
            identifier="textarea"
            placeholder="..."
            label="Message"
            type="textarea"
            rows="10"
            cols="70"
            value={textarea}
            changeField={(identifier, newValue) => {
              updateContactField(identifier, newValue);
            }}
          />
          <Button type="submit" content="Envoyer" />
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
