// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
// == Import

import './chatCard.scss';

// == Composant

/**
 * Generate an conversation card
 * @param {name} String
 * @param {picture} String
 * @param {newMessage} Boolean
 */

const ChatCard = ({
  picture,
  name,
  newMessage,
  id,
  manageClick,
}) => {

  return (
    <Link
      to={`/conversation/${id}`}
      onClick={manageClick}
    >
      <article className="chatCard">
        <img src={picture} />
        <h1 className="name">{name}</h1>
        <div className={newMessage} />
      </article>
    </Link>
  )
};


// == Export
export default ChatCard;
