import React from 'react';
import PropTypes from 'prop-types';
import './fieldselect.scss';

/**
 * A field to be used inside a form : label and input
 */
const FieldSelect = ({
  label, identifier, placeholder, value, changeField, array, multiple
}) => {
  const handleChange = (event) => {
    const value = event.target.value;
    // console.log('fieldselect',identifier,value);
    changeField(identifier, value);
  };

  return (
    <div className="field">
      <label htmlFor={label}>{label}</label>
      <select
        className="input-select"
        placeholder={placeholder}
        name={identifier}
        id={identifier}
        multiple={multiple}
        value={value}
        onChange={handleChange}
      >
        <option defaultValue>Selectionnez une option</option>
        {array.map((item) => (
          <option
            key={item.id}
            value={item.id}
          >{item.name}</option>
        ))}
      </select>
    </div>
  );
};


export default FieldSelect;
