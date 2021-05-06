// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faComments, faPlus, faUser, faBars, faSignOutAlt, faSignInAlt, faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

// == Import
import './navbar.scss';
import Logo from 'src/assets/images/logo.svg';
// == Import Icons

// == Composant
export default function NavBar({ isConnected, id, manageClick }) {
  const handleClick = () => {
    manageClick(id);
  };
  return (
    <div className="desktop-navbar">
      <div className="logo-container">
        <NavLink
          to="/"
          className="logo"
          activeClassName="selected"
          exact
        >
          <img className="logo" src={Logo} alt="logo" width="250px" />
        </NavLink>
      </div>
      <ul className="navbar">
        <NavLink
          to="/"
          className="icon"
          activeClassName="selected"
          exact
        >
          <div className="tooltip"><FontAwesomeIcon icon={faHome} />
            <span className="tooltip-text">Accueil</span>
          </div>
        </NavLink>
        {isConnected && (
          <NavLink
            to="/messagerie"
            className="icon"
            activeClassName="selected"
          >
            <div className="tooltip"><FontAwesomeIcon icon={faComments} />
              <span className="tooltip-text">Messagerie</span>
            </div>
          </NavLink>
        )}
        {isConnected && (
          <NavLink
            to="/ajouter-un-objet"
            className="add icon"
            activeClassName="selected"
          >
            <div className="tooltip"><FontAwesomeIcon icon={faPlus} />
              <span className="tooltip-text">Ajouter un objet</span>
            </div>
          </NavLink>
        )}
        {isConnected && (
          <NavLink
            to={`/mon-profil/${id}`}
            className="icon"
            activeClassName="selected"
            onClick={handleClick}
          >
            <div className="tooltip"><FontAwesomeIcon icon={faUser} />
              <span className="tooltip-text">Mon profil</span>
            </div>
          </NavLink>
        )}

        {isConnected && (
          <NavLink
            to="/deconnexion"
            className="icon sign_out"
            activeClassName="selected"
          >
            <div className="tooltip"><FontAwesomeIcon icon={faSignOutAlt} />
              <span className="tooltip-text">Deconnexion</span>
            </div>
          </NavLink>
        )}
        {!isConnected && (
          <NavLink
            to="/inscription"
            className="icon"
            activeClassName="selected"
          >
            <div className="tooltip"><FontAwesomeIcon icon={faUserPlus} />
              <span className="tooltip-text">Inscription</span>
            </div>
          </NavLink>
        )}
        {!isConnected && (
          <NavLink
            to="/connexion"
            className="icon"
            activeClassName="selected"
          >
            <div className="tooltip"><FontAwesomeIcon icon={faSignInAlt} />
              <span className="tooltip-text">Connexion</span>
            </div>
          </NavLink>
        )}
        <NavLink
          to="/autres"
          className="icon other"
          activeClassName="selected"
        >
          <FontAwesomeIcon icon={faBars} />
        </NavLink>
      </ul>

    </div>
  );
}
