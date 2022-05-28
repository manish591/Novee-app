import React from "react";
import { useUserAddress, useStateContext } from "../../../../hooks";

const AddressCardButton = ({
  _id,
  setIsAddressFormOpen,
  setAddressFormData,
  setIsEditingAddress,
}) => {
  const { deleteAddress } = useUserAddress();
  const { state } = useStateContext();

  const addressToEdit = state?.addressData.find((item) => item._id === _id);
  return (
    <div className="address-card__action">
      <button
        className="address-card__edit"
        onClick={() => {
          setIsEditingAddress(true);
          setIsAddressFormOpen(true);
          setAddressFormData((afd) => {
            return { ...afd, ...addressToEdit };
          });
        }}
      >
        Edit
      </button>
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
