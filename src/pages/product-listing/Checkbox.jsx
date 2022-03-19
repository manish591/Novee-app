import React from "react";

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

export { Checkbox };