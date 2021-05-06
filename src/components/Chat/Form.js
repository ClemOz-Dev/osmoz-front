import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './form.scss';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Form = ({ value, manageSubmit, setValue }) => {
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    manageSubmit();
    history.push('/messagerie');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="text"
        placeholder="Saisissez un message"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button className="send-button" type="submit">
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </form>
  );
};

// Form.propTypes = {
//   value: PropTypes.string.isRequired,
//   // paramètre : nouvelle valeur
//   setValue: PropTypes.func.isRequired,
//   // pas de paramètre
//   manageSubmit: PropTypes.func.isRequired,
// };

export default Form;
