// == Import npm
import React from 'react';

// == Import
import './devpage.scss';
import Clem from 'src/assets/images/avatar/Avatar-Clem.png';
import Charlotte from 'src/assets/images/avatar/Avatar-Charlotte.png';
import Chloe from 'src/assets/images/avatar/Avatar-Chloe.png';
import Maud from 'src/assets/images/avatar/Avatar-Maud.png';
import Micka from 'src/assets/images/avatar/Avatar-Micka.png';

// == Composant
const DevPage = () => (

  <div className="div-devpage">
    <section className="devpage-container">
      <h1 className="devpage-title">L'équipe d'Osmoz</h1>
      <div className="dev-page">
        <section className="dev-container">

          <h2 className="team-front">Team Front-End</h2>
          <section className="team">

            <div className="dev-card">
              <img className="img-dev" src={Clem} alt="Clem" width="150px" height="150px" />
              <strong className="name-dev">Clem</strong>
              <p className="role-dev">Product Owner</p>
              <p className="citation">"AWS c'est la Hess"</p>
            </div>

            <div className="dev-card">
              <img className="img-dev" src={Charlotte} alt="Charlotte" width="150px" height="150px" />
              <strong className="name-dev">Charlotte</strong>
              <p className="role-dev">Scrum Master</p>
              <p className="citation">".git &#123;<br />filter : blur(10px);<br />&#125;"</p>
            </div>

            <div className="dev-card">
              <img className="img-dev" src={Chloe} alt="Chloé" width="150px" height="150px" />
              <strong className="name-dev">Chloé</strong>
              <p className="role-dev">Lead Dev Front</p>
              <p className="role-dev">UX/UI Designer</p>
              <p className="role-dev">Git Master Front</p>
              <p className="citation">"J'aime pas le #f0f, <br /> c'est vraiment horrible"</p>
            </div>

          </section>

          <h2 className="team-back">Team Back-End</h2>
          <section className="team">

            <div className="dev-card">
              <img className="img-dev" src={Maud} alt="Maud" width="150px" height="150px" />
              <strong className="name-dev">Maud</strong>
              <p className="role-dev">Git Master Back</p>
              <p className="citation">"Cors du matin Chagrin,<br />  Nelmio du soir Espoir"</p>
            </div>

            <div className="dev-card">
              <img className="img-dev" src={Micka} alt="Micka" width="150px" height="150px" />
              <strong className="name-dev">Micka</strong>
              <p className="role-dev">Lead Dev Back</p>
              <p className="citation">
                "1. git commit, <br />
                2. git push, <br />
                3. git HELP !"
              </p>
            </div>

          </section>

        </section>
      </div>
    </section>
  </div>

);

// == Export
export default DevPage;
