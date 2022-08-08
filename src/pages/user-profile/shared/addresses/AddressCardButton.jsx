import React from 'react';
import PropTypes from 'prop-types';
import { useUserAddress, useStateContext } from 'hooks';

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
        type="button"
        className="address-card__edit"
        onClick={() => {
          setIsEditingAddress(true);
          setIsAddressFormOpen(true);
          setAddressFormData((afd) => {
            return { ...afd, ...addressToEdit };
          });
        }}>
        <span className="material-icons-outlined">edit</span>
      </button>
      <button
        type="button"
        className="address-card__delete"
        onClick={() => deleteAddress({ _id })}>
        <span className="material-icons-outlined">delete</span>
      </button>
    </div>
  );
};

AddressCardButton.propTypes = {
  _id: PropTypes.string.isRequired,
  setIsAddressFormOpen: PropTypes.func.isRequired,
  setAddressFormData: PropTypes.func.isRequired,
  setIsEditingAddress: PropTypes.func.isRequired,
};

export { AddressCardButton };
