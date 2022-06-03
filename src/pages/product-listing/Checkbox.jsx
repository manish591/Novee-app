import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label, name, id, isChecked, callback }) => {
  return (
    <div className="filters__group">
      <input
        type="checkbox"
        id={`${label}-${id}`}
        name={label}
        className="filters__checkbox"
        checked={isChecked}
        onChange={callback}
      />
      <label htmlFor={`${label}-${id}`} className="filters__label">
        {name}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
};

export { Checkbox };
