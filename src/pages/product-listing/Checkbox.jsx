import React from "react";

const Checkbox = ({ label, name, id }) => {
  return (
    <div className="filters__group">
      <input
        type="checkbox"
        id={`${label}-${id}`}
        name={label}
        className="filters__checkbox"
      />
      <label htmlFor={`${label}-${id}`} className="filters__label">
        {name}
      </label>
    </div>
  );
};

export { Checkbox };