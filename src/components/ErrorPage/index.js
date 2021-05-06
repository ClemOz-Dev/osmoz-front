// == Import npm
import React from 'react';
import { useHistory } from 'react-router-dom';

// == Import
import './errorpage.scss';
import ErrorImage from 'src/assets/images/Error404.png';

// == Composant
const ErrorPage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (

    <div className="errorpage-container">
      <img className="image-container" src={ErrorImage} alt="404" />
      <p className="p1">La page demandée n'existe pas ou n'est plus disponible.</p>
      <p>Cliquez sur le bouton ci-dessous vous redirigeras vers la page d'accueil du site.</p>
      <button
        className="errorpage-button"
        onClick={handleClick}
        type="button"
      >
        Revenir à l'accueil
      </button>
    </div>

  );
};

// == Export
export default ErrorPage;
