import React from "react";

const AddressCardButton = () => {
  return (
    <div className="address-card__action">
      <button className="address-card__edit">Edit</button>
      <button className="address-card__delete">Delete</button>
    </div>
  );
};

export { AddressCardButton };
