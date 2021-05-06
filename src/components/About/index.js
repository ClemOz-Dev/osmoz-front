// == Import npm
import React from 'react';

// == Import
import './about.scss';

// == Composant
const About = () => (

  <div className="div-about">
    <section className="about-container">
      <h1 className="about-title">À propos</h1>
      <div className="about-page">
        <h2 className="subtitle-about">Le projet Osmoz</h2>
        <p className="section">
          Osmoz est né de l'idée de consommer autrement, de manière plus responsable et éthique,
          en valorisant les produits culturels possédés par les particuliers.
          En reprenant les codes de plateformes populaires comme "Le Bon Coin",
          il favorise les intéractions entres les gens, renforçant le lien social local.
        </p>
        <h2 className="subtitle-about">Crédits</h2>
        <ul className="section">
          <li className="credits">Logo "Osmoz": Créer par l'équipe sur <a className="credits-link" href="https://www.canva.com/" target="_blank" rel="noreferrer">Canva.com</a></li>
          <li className="credits">Background du site: Création avec les couleurs du site sur <a className="credits-link" href="https://SVGBackgrounds.com" target="_blank" rel="noreferrer">SVGBackgrounds.com</a></li>
          <li className="credits">Images des produits: Sur les fiches produits d'<a className="credits-link" href="https://www.amazon.fr/" target="_blank" rel="noreferrer">Amazon.fr</a></li>
          <li className="credits">Avatars: Création des membres de l'équipe et des images de profil sur <a className="credits-link" href="https://getavataaars.com/" target="_blank" rel="noreferrer">Getavataaars.com</a></li>
          <li className="credits">Images de fond: Sur la page d'ajout d'objet, chaque type de produits est représenté par une image trouvée sur <a className="credits-link" href="https://unsplash.com/" target="_blank" rel="noreferrer">Unsplash.com</a></li>
          <li className="credits">Icônes: Toutes les icônes proviennent de <a className="credits-link" href="https://fontawesome.com/" target="_blank" rel="noreferrer">Fontawesome.com</a></li>
          <li className="credits">Mentions légales: Rédigée sur <a className="credits-link" href="https://www.legalplace.fr/" target="_blank" rel="noreferrer">Legalplace.fr</a></li>
        </ul>
      </div>
    </section>
  </div>
);

// == Export
export default About;
