// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// == Import
import './cardItem.scss';

// == Composant

/**
 * Generate an item card
 * @param {name} String
 * @param {author} String
 * @param {picture} String
 * @param {type} String
 * @param {user} String
 */
const CardItem = ({
  name,
  author,
  picture,
  type,
  genders,
  status,
  user,
  userId,
  manageClick,
}) => {
  const cssClass = classNames('item-status', {
    'status--dispo': status == 'dispo',
    'status--indispo': status == 'pas dispo',
    'status--reserve': status == 'réservé',
  });

  const handleClick = () => {
    manageClick(userId);
  };
  return (
    <article className="card">
      <h1 className="object-name">{name}</h1>
      <div className={cssClass}>
      </div>
      {author && <p className="creator">par {author}</p>}
      <div className="thumbnail-holder">
        <img className="image" src={picture} alt={`couverture de ${name}`} width="200px" height="200px" />
      </div>
      <div className="genre-container">
        {genders && genders.map((gender) => {
          return (
            <span key={gender.id} className="genre">{gender.name}</span>)
        })}
      </div>
      <Link to={`/mon-profil/${userId}`} className="owner" onClick={handleClick}>{user}</Link>
      <div className="card-category">
        <span className="type">{type}</span>
      </div>
    </article>
  );
};

// CardItem.propTypes = {
//   type: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   user: PropTypes.string.isRequired,
//   userId: PropTypes.number.isRequired,
// };

// == Export
export default CardItem;
