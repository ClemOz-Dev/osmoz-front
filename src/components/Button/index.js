import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

/**
 * Customisable Button
 * @param {content} String
 * @param {type} String
 */
const Button = ({ content, type }) => {
  return (
    <button
      className="button"
      type={type}
    >
      {content}
    </button>
  );
};
export default Button;
