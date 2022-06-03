import React from 'react';
import PropTypes from 'prop-types';
import { AddressCardButton } from './AddressCardButton';

const AddressCard = ({
  _id,
  address,
  country,
  name,
  postalCode,
  tel,
  currentId,
  setCurrentId,
  setIsAddressFormOpen,
  setAddressFormData,
  setIsEditingAddress,
}) => {
  return (
    <article className="address-card">
      <section
        role="button"
        tabIndex={0}
        className="address-card__wrapper"
        onClick={() => {
          setCurrentId(_id);
        }}
        onKeyUp={() => {
          setCurrentId(_id);
        }}>
        <h4 className="address-card__name">{name}</h4>
        <p className="address-card__address">
          {address}, {postalCode}
        </p>
        <p className="address-card__country">{country}</p>
        <p className="address-card__telephone">Phone Number: {tel}</p>
      </section>
      {currentId === _id && (
        <AddressCardButton
          _id={_id}
          setIsAddressFormOpen={setIsAddressFormOpen}
          setAddressFormData={setAddressFormData}
          setIsEditingAddress={setIsEditingAddress}
        />
      )}
    </article>
  );
};

AddressCard.propTypes = {
  _id: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  currentId: PropTypes.string.isRequired,
  setCurrentId: PropTypes.func.isRequired,
  setIsAddressFormOpen: PropTypes.func.isRequired,
  setAddressFormData: PropTypes.func.isRequired,
  setIsEditingAddress: PropTypes.func.isRequired,
};

export { AddressCard };
