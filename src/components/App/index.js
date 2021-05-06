// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
// - Constants Imports
import NavBar from 'src/containers/NavBar';
import Footer from 'src/components/Footer';

// - Dynamics Imports
import Chat from 'src/containers/Chat';
import ChatList from 'src/containers/ChatList';
import Home from 'src/containers/Home';
import Loader from 'src/components/Loader';
import HomepageUser from 'src/containers/HomepageUser';
import AddObjects from 'src/containers/AddObjects';
import UserProfile from 'src/containers/UserProfile';
import LoginForm from 'src/containers/LoginForm';
import RegisterForm from 'src/containers/RegisterForm';
import Others from 'src/components/Others';
import SignOut from 'src/containers/SignOut';
import LegalMention from 'src/components/LegalMention';
import ContactForm from 'src/containers/ContactForm';
import ErrorPage from 'src/components/ErrorPage';
import SearchResult from 'src/containers/SearchResult';
import DevPage from 'src/components/DevPage';
import About from 'src/components/About';

import './style.scss';

// == Composant
const App = ({
  loadBooks,
  loadMovies,
  loadMusics,
  messages,
  isLoading,
  isConnected,
  connectUser,
  loadTypes,
  loadGenders,
  loadUsers,
}) => {
  useEffect(() => {
    const { token } = window.localStorage;
    const { email } = window.localStorage;
    { window.localStorage.token && connectUser(email); }
    loadBooks();
    loadMovies();
    loadMusics();
    loadGenders();
    loadTypes();
    loadUsers();
  },[]);
  return (
    <div className="container">
      <NavBar />
      <Switch>
        {isLoading && <Loader />}
        <Route exact path="/" exact>
          {!isConnected && <Home />}
          {isConnected && <HomepageUser />}
        </Route>
        <Route path="/messagerie">
          <ChatList />
        </Route>
        <Route path="/conversation/:id">
          <Chat messages={messages} />
        </Route>
        <Route path="/ajouter-un-objet">
          <AddObjects />
        </Route>
        <Route path="/mon-profil/:id">
          <UserProfile />
        </Route>
        <Route path="/autres">
          <Others isConnected={isConnected} />
        </Route>
        <Route path="/inscription">
          <RegisterForm />
        </Route>
        <Route path="/connexion">
          <LoginForm />
        </Route>
        <Route path="/deconnexion">
          <SignOut />
        </Route>
        <Route path="/a-propos">
          <About />
        </Route>
        <Route path="/equipe-osmoz">
          <DevPage />
        </Route>
        <Route path="/mentions-legales">
          <LegalMention />
        </Route>
        <Route path="/contactez-nous">
          <ContactForm />
        </Route>
        <Route path="/resultat-recherche">
          <SearchResult />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  loadBooks: PropTypes.func.isRequired,
  loadMovies: PropTypes.func.isRequired,
  loadMusics: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

export default App;
