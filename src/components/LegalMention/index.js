// == Import npm
import React from 'react';

// == Import
import './legalmention.scss';

// == Composant
const LegalMention = () => (

  <div className="div-legalmention">
    <section className="legalmention-container">
      <h1 className="legalmention-title">Mentions légales</h1>
      <div className="legal-mentions">
        <p className="section">
          En vigueur au 12/04/2021
          Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin
          2004 pour la  Confiance dans l’économie numérique, dite L.C.E.N.,
          il est porté à la connaissance
          des Utilisateurs du site Osmoz.io les présentes mentions légales.
          La connexion et la navigation sur le site <strong>Osmoz</strong> par l’Utilisateur
          implique acceptation  intégrale et sans réserve des présentes mentions légales.
          Ces dernières sont accessibles sur le site à la rubrique « Mentions légales ».
        </p>
        <p className="section">
          ARTICLE 1 : L’éditeur
          L'édition du site Osmoz.io est assurée par la Société SARL <strong>Prom'Oz </strong>
          au capital de <strong> 1000000000000 euros</strong>, immatriculée au RCS de New York
          sous le numéro 123456789 dont le siège social est situé au  2 rue du code,
          numéro de téléphone 0123456789, adresse e-mail : promoz@io.io.
          N° de TVA intracommunautaire : 123456789
          Le Directeur de la publication est Guillaume Portes
        </p>
        <p className="section">
          ARTICLE 2 : L’hébergeur
          L'hébergeur du site Osmoz.io est la Société <strong>OVH - OnFire</strong>, dont le
          siège social est situé au Strasbourg , avec le numéro de téléphone : 0123456789.
        </p>
        <p className="section">
          ARTICLE 3 : Accès au site
          Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de force
          majeure, interruption  programmée ou non et
          pouvant découlant d’une nécessité de maintenance.
          En cas de modification, interruption ou suspension
          des services le site Osmoz.io ne saurait être tenu  responsable.
        </p>
        <p className="section">
          ARTICLE 4 : Collecte des données
          Le site assure à l'Utilisateur une collecte et
          un traitement d'informations personnelles dans le respect
          de la vie privée conformément à la loi n°78-17
          du 6 janvier 1978 relative à l'informatique, aux fichiers
          et aux libertés. Le site est déclaré à la CNIL sous le numéro 0123456789.
          En vertu de la loi Informatique et Libertés, en
          date du 6 janvier 1978, l'Utilisateur dispose d'un droit  d'accès,
          de rectification, de suppression et d'opposition
          de ses données personnelles. L'Utilisateur  exerce ce droit :
          · par mail à l'adresse email promoz@io.io
        </p>
        <p className="section">
          ARTICLE 5 : Cookies
          L’Utilisateur est informé que lors de ses visites
          sur le site, un cookie peut s’installer automatiquement  sur son logiciel de navigation.
          En naviguant sur le site, il les accepte.
          Un cookie est un élément qui ne permet pas d’identifier
          l’Utilisateur mais sert à enregistrer des
          informations relatives à la navigation de celui-ci sur
          le site Internet. L’Utilisateur pourra désactiver ce
          cookie par l’intermédiaire des paramètres figurant au sein de son logiciel de navigation.
        </p>
        <p className="last-section">
          ARTICLE 6 : Propriété intellectuelle
          Toute utilisation, reproduction, diffusion, commercialisation,
          modification de toute ou partie du site  Osmoz.io,
          sans autorisation de l’Editeur est prohibée et pourra entraînée
          des actions et poursuites  judiciaires telles que
          notamment prévues par le Code de la propriété intellectuelle et le Code civil.
        </p>
      </div>
    </section>
  </div>
);

// == Export
export default LegalMention;
