import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from "react-router-dom";

import Field from 'src/components/Field';
import Button from 'src/components/Button';
import './loginform.scss';

const LoginForm = ({
  email,
  password,
  updateSettingsField,
  submitLogin,
}) => {
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/");
    submitLogin();
  };

  return (
    <div className="login-container">
      <h1 className="title">Connexion</h1>
      <form
        className="loginForm"
        onSubmit={handleSubmit}
      >
        <Field
          className="field"
          identifier="email"
          placeholder="email@email.io"
          label="E-mail"
          value={email}
          changeField={(identifier, newValue) => {
            updateSettingsField(identifier, newValue);
          }}
        />
        <Field
          className="field"
          identifier="password"
          placeholder="******"
          label="Mot de passe"
          type="password"
          value={password}
          changeField={(identifier, newValue) => {
            updateSettingsField(identifier, newValue);
          }}
        />

        <div className="validation-content">
          <a className="resetLink" href="#">Réinitialiser le mot de passe</a>
          <Button type="submit" content="Connexion" />
          <Link to={`/inscription`}>
            Pas encore de compte? <strong className="redirection">Inscris toi en cliquant ici.</strong>
          </Link>
        </div>

      </form>
    </div>
  );
};

export default LoginForm;
