// == Import npm
import React from 'react';

import './footer.scss';
import ContactForm from 'src/containers/ContactForm';
import LegalMention from 'src/components/LegalMention';
import DevPage from 'src/components/DevPage';
import About from 'src/components/About';

/**
 * Navigation to ContactForm and Legal Notices
 */
// == Composant
class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      showReply: false,
      showContact: false,
      showButton: false,
      showButton2: false,
      showDev: false,
      showAbout: false,
      showButton3: false,
      showButton4: false,
    };
  }

  onClick(e) {
    e.preventDefault();
    this.setState({ showReply: !this.state.showReply });
    this.setState({ showButton: !this.state.showButton });
  }

  onClick2(e) {
    e.preventDefault();
    this.setState({ showContact: !this.state.showContact });
    this.setState({ showButton2: !this.state.showButton2 });
  }

  onClick3(e) {
    e.preventDefault();
    this.setState({ showDev: !this.state.showDev });
    this.setState({ showButton3: !this.state.showButton3 });
  }

  onClick4(e) {
    e.preventDefault();
    this.setState({ showAbout: !this.state.showAbout });
    this.setState({ showButton4: !this.state.showButton4 });
  }

  render() {
    return (
      <div className="footer">
        {this.state.showButton4 && <button className="footer-button" onClick={this.onClick4.bind(this)}>✗</button>}
        <a className="link" onClick={this.onClick4.bind(this)} href="#">À propos</a>
        {this.state.showAbout && <About />}

        {this.state.showButton3 && <button className="footer-button" onClick={this.onClick3.bind(this)}>✗</button>}
        <a className="link" onClick={this.onClick3.bind(this)} href="#">L'équipe d'Osmoz</a>
        {this.state.showDev && <DevPage />}

        {this.state.showButton && <button className="footer-button" onClick={this.onClick.bind(this)}>✗</button>}
        <a className="link" onClick={this.onClick.bind(this)} href="#">Mentions légales</a>
        {this.state.showReply && <LegalMention />}

        {this.state.showButton2 && <button className="footer-button-contact" onClick={this.onClick2.bind(this)}>✗</button>}
        <a className="link" onClick={this.onClick2.bind(this)} href="#">Nous contacter</a>
        {this.state.showContact && <ContactForm />}
      </div>
    );
  }
}

export default Footer;
