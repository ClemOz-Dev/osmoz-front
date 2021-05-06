// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './others.scss';

// == Composant
export default function Others({ isConnected }) {
  return (
    <div className="others-container">
      <NavLink
        to="/a-propos"
        className="links-others"
        activeClassName="selected"
      >
        À propos
      </NavLink>

      <NavLink
        to="/equipe-osmoz"
        className="links-others"
        activeClassName="selected"
      >
        L'équipe d'Osmoz
      </NavLink>

      <NavLink
        to="/contactez-nous"
        className="links-others"
        activeClassName="selected"
      >
        Contactez-nous!
      </NavLink>

      <NavLink
        to="/mentions-legales"
        className="links-others"
        activeClassName="selected"
      >
        Mentions Légales
      </NavLink>

      {isConnected && (
      <NavLink
        to="/deconnexion"
        className="links-others"
        activeClassName="selected"
      >
        Déconnexion
      </NavLink>
      )}
    </div>
  );
}
