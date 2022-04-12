import React from "react";
import { useUserAddress } from "../../../../hooks";

const AddressCardButton = ({ _id }) => {
  const { deleteAddress } = useUserAddress();
  return (
    <div className="address-card__action">
      <button className="address-card__edit">Edit</button>
      <button
        className="address-card__delete"
        onClick={() => deleteAddress({ _id })}
      >
        Delete
      </button>
    </div>
  );
};

export { AddressCardButton };
