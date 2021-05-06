// == Import npm
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments, faEdit,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';

import { Link } from 'react-router-dom';

// == Import
import CardItem from 'src/components/CardItem';
import Field from 'src/components/Field';
import Button from 'src/components/Button';
import { itemsCounter } from 'src/utils';

import './userProfile.scss';

// == Composant
const UserProfile = ({
  picture,
  books,
  movies,
  musics,
  nickname,
  pseudo,
  zipcode,
  role,
  id,
  loadThisUser,
  isOwn,
  updateSettingsField,
  saveUpdates,
  currentZipcode,
  currentNickname,
  isEditorToggle,
  toggleEditor,
  toggleChatbox,
  isChatboxToggle,
  selectInterlocutor,
  updateMessageField,
  messageContent,
  sendMessage,
}) => {
  useEffect(() => {
    loadThisUser(id);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleEditor();
    saveUpdates();
  };

  const handleClick = (id) => {
    loadThisUser(id);
  };

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const manageClick = () => {
    toggleChatbox();
    selectInterlocutor(id);
  };
  return (
    <div className="user-profile">
      <div className="header">
        {!isOwn && <h1 className="title">Chez {nickname}</h1>}
        {isOwn && <h1 className="title">Mon compte</h1>}
        {isOwn
          && (
          <button
            className="edit-button"
            onClick={toggleEditor}
          >
            <FontAwesomeIcon icon={faEdit} /> Editer mon profil
          </button>
          )}

      </div>
      {!isOwn && isChatboxToggle
        && (
        <div className="message-popup">
          <form onSubmit={handleSubmitMessage}>
            <input
              className="form-input"
              type="text"
              placeholder="Saisissez un message"
              value={messageContent}
              onChange={(event) => {
                updateMessageField(event.target.value);
              }}
            />
            <button className="send-button" type="submit">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
        )}

      {isEditorToggle && isOwn
        && (
        <div className="editor">
          <form
            onSubmit={handleSubmit}
          >
            <Field
              identifier="nickname"
              placeholder={currentNickname}
              label="Change de pseudo"
              value={pseudo}
              changeField={(identifier, newValue) => {
                updateSettingsField(identifier, newValue);
              }}
            />
            <Field
              identifier="zipcode"
              placeholder={currentZipcode}
              label="Modifie ton code postal"
              value={currentZipcode}
              changeField={(identifier, newValue) => {
                updateSettingsField(identifier, newValue);
              }}
            />
            <Button type="submit" content="Valider" />
          </form>
        </div>
        )}
      <div className="personal-details">
        <div className="user-card">
          <div className="avatar-holder">
            <img className="avatar" src={picture} alt="Username avatar" width="150px" height="150px" />
          </div>
          <section className="users-information">
            {/* <span className="role">{role}</span> */}
            <div className="user-details">
              {isOwn && <p className="username">{pseudo}</p>}
              {!isOwn && <p className="localisation">{zipcode}</p>}
              {isOwn && <p className="localisation">{currentZipcode}</p>}
            </div>
            {!isOwn
            && (
            <button
              className="chat-button"
              onClick={manageClick}
            >
              <FontAwesomeIcon icon={faComments} />
            </button>
            )}
          </section>
        </div>
        <div className="additional-details">
          <div className="profile-tabs">
            <button className="tablinks" onClick={openPreferencesContent}>Voir les Préférences</button>
          </div>
          <div className="content" id="preferences">
            <h3 className="heading">Préférences</h3>
            <span className="label">Roman</span>
            <span className="label">Jeunesse</span>
            <span className="label">Langues</span>
            <span className="label">Cuisine</span>
            <span className="label">Fantastique</span>
          </div>
        </div>
      </div>

      <div className="collection">
        <h3 className="heading">Collection</h3>
        <div className="category-tabs">
          <Tabs>
            <TabList className="tablist">
              <Tab className="tabs">Livres ({itemsCounter(books)})</Tab>
              <Tab className="tabs">Cinéma ({itemsCounter(movies)})</Tab>
              <Tab className="tabs">Musique ({itemsCounter(musics)})</Tab>
            </TabList>

            <TabPanel className="tab-panel">
              <div className="tab-profil">
                {books.map((book) => (
                  <CardItem
                    key={book.id}
                    name={book.name}
                    genders={book.gender}
                    status={book.status}
                    author={book.author}
                    picture={book.picture}
                    type={book.type.name}
                    user={nickname}
                    userId={id}
                    manageClick={handleClick}
                  />
                ))}
              </div>
            </TabPanel>

            <TabPanel className="tab-panel">
              <div className="tab-profil">
                {movies.map((movie) => (
                  <CardItem
                    key={movie.id}
                    name={movie.name}
                    genders={movie.gender}
                    status={movie.status}
                    author={movie.author}
                    picture={movie.picture}
                    type={movie.type.name}
                    user={nickname}
                  />
                ))}
              </div>
            </TabPanel>

            <TabPanel className="tab-panel">
              <div className="tab-profil">
                {musics.map((music) => (
                  <CardItem
                    key={music.id}
                    name={music.name}
                    genders={music.gender}
                    status={music.status}
                    author={music.author}
                    picture={music.picture}
                    type={music.type.name}
                    user={nickname}
                  />
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

function openPreferencesContent() {
  const divContent = document.getElementById('preferences');
  if (divContent.style.display === 'block') {
    divContent.style.display = 'none';
  }
  else {
    divContent.style.display = 'block';
  }
}

// == Export
export default UserProfile;
