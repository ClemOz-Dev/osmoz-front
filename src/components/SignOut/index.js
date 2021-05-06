// == Import npm
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// == Import
import './signout.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// == Composant
const SignOut = ({ disconnect }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  useEffect(() => {
    window.localStorage.clear();
    disconnect();
  }, []);

  return (
    <div className="signout">
      <h1 className="title">Déconnexion</h1>
      <div className="confirmation">
        <p className="text">Vous avez été déconnecté avec succès.</p>
        <p className="text">A très bientôt sur Osmoz!</p>
        <div className="check-mark"><FontAwesomeIcon icon={faCheckCircle} /></div>
        <button
          className="link"
          onClick={handleClick}
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
};

// == Export
export default SignOut;
