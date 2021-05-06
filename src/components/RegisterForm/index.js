import React from 'react';
// import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import Field from 'src/components/Field';
import Button from 'src/components/Button';
import './registerform.scss';

const RegisterForm = ({
  email, nickname, password, zipcode, updateUpdateField, addUser,
}) => {
  let history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    addUser();
    history.push("/");
  };
  //! inclure un composant pop-up
  //! pour signifier le succès de l'action

  return (
    <div className="register-container">
      <h1 className="title">Inscription</h1>
      <form
        className="registerForm"
        onSubmit={handleSubmit}
      >
        <Field
          identifier="email"
          placeholder="email@email.io"
          label="E-mail"
          value={email}
          changeField={(identifier, newValue) => {
            updateUpdateField(identifier, newValue);
          }}
        />
        <Field
          identifier="password"
          placeholder="******"
          label="Mot de passe"
          type="password"
          value={password}
          changeField={(identifier, newValue) => {
            updateUpdateField(identifier, newValue);
          }}
        />
        <Field
          identifier="nickname"
          placeholder="..."
          label="Pseudo"
          value={nickname}
          changeField={(identifier, newValue) => {
            updateUpdateField(identifier, newValue);
          }}
        />
        <Field
          identifier="zipcode"
          placeholder="ex: 75018,..."
          label="Code Postal"
          value={zipcode}
          changeField={(identifier, newValue) => {
            updateUpdateField(identifier, newValue);
          }}
        />
        <div className="validation-content">
          <Button type="submit" content="Inscription" />
          <Link to={`/connexion`}>
            Déjà un compte? <strong className="redirection">Connecte toi en cliquant ici.</strong>
        </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
