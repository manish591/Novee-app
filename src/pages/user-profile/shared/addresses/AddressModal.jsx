import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useUserAddress } from 'hooks';
import { countries } from 'utilis';

const AddressModal = ({
  setIsAddressFormOpen,
  isEditingAddress,
  setIsEditingAddress,
  setAddressFormData,
  addressFormData,
  currentId,
}) => {
  const [errors, setErrors] = useState({
    nameError: '',
    addressError: '',
    codeError: '',
    countryError: '',
    telError: '',
  });

  const { addAddress, updateAddress } = useUserAddress();

  const handleFormValidation = (e) => {
    const isValid = e.target.validity.valid;
    const field = e.target.name;
    const { validationMessage } = e.target;
    if (!isValid) {
      setErrors({
        ...errors,
        [field === 'postal-code' ? 'codeError' : `${field}Error`]:
          validationMessage,
      });
    } else {
      setErrors({
        ...errors,
        [field === 'postal-code' ? 'codeError' : `${field}Error`]: '',
      });
    }
  };

  const handleAddUserAddress = (e) => {
    e.preventDefault();
    addAddress({ address: addressFormData });
    setAddressFormData({
      name: '',
      address: '',
      tel: '',
      country: '',
      postalCode: '',
    });
    setIsAddressFormOpen(false);
  };

  return (
    <div className="address-form">
      <div className="address-form__wrapper">
        <h3 className="address-form__title">Add New Address</h3>
        <form
          className="address-form__container"
          onSubmit={handleAddUserAddress}>
          <section className="address-form__group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              aria-describedby="name-validation"
              value={addressFormData.name}
              onChange={(e) => {
                setAddressFormData((afd) => ({ ...afd, name: e.target.value }));
              }}
              onBlur={handleFormValidation}
              required
            />
            <p
              id="name-validation"
              aria-live="assertive"
              className="validation-message">
              {errors.nameError}
            </p>
          </section>

          <section className="address-form__group">
            <label htmlFor="address">Address</label>
            <textarea
              name="address"
              id="address"
              maxLength="300"
              autoComplete="address"
              aria-describedby="address-validation"
              rows="5"
              value={addressFormData.address}
              onChange={(e) => {
                setAddressFormData((afd) => ({
                  ...afd,
                  address: e.target.value,
                }));
              }}
              onBlur={handleFormValidation}
              required
            />
            <p
              id="address-validation"
              aria-live="assertive"
              className="validation-message">
              {errors.addressError}
            </p>
          </section>

          <section className="address-form__group">
            <label htmlFor="postal-code">Postal Code</label>
            <input
              type="text"
              name="postal-code"
              id="postal-code"
              autoComplete="postal-code"
              aria-describedby="postal-code-validation"
              value={addressFormData.postalCode}
              onChange={(e) => {
                setAddressFormData((afd) => ({
                  ...afd,
                  postalCode: e.target.value,
                }));
              }}
              onBlur={handleFormValidation}
              required
            />
            <p
              id="postal-code-validation"
              aria-live="assertive"
              className="validation-message">
              {errors.codeError}
            </p>
          </section>

          <section className="address-form__group">
            <label htmlFor="country">Country</label>
            <select
              name="country"
              id="country"
              autoComplete="country"
              aria-describedby="country-validation"
              value={addressFormData.country}
              onChange={(e) => {
                setAddressFormData((afd) => ({
                  ...afd,
                  country: e.target.value,
                }));
              }}
              onBlur={handleFormValidation}
              required>
              <option value="">&nbsp;</option>
              {countries.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            <p
              id="country-validation"
              aria-live="assertive"
              className="validation-message">
              {errors.countryError}
            </p>
          </section>

          <section className="address-form__group">
            <label htmlFor="tel">Mobile Number</label>
            <input
              type="tel"
              name="tel"
              id="tel"
              autoComplete="tel"
              pattern="[\d \-\+]+"
              maxLength="30"
              aria-describedby="tel-validation"
              value={addressFormData.tel}
              onChange={(e) => {
                setAddressFormData((afd) => ({ ...afd, tel: e.target.value }));
              }}
              onBlur={handleFormValidation}
              required
            />
            <p
              id="tel-validation"
              aria-live="assertive"
              className="validation-message">
              {errors.telError}
            </p>
          </section>

          <section className="address-form__cta cta">
            {isEditingAddress ? (
              <button
                type="button"
                className="cta__submit"
                onClick={() => {
                  setIsEditingAddress(false);
                  updateAddress({ address: addressFormData, _id: currentId });
                  setIsAddressFormOpen(false);
                  setAddressFormData({
                    name: '',
                    address: '',
                    tel: '',
                    country: '',
                    postalCode: '',
                  });
                }}>
                Update
              </button>
            ) : (
              <button type="submit" className="cta__submit">
                Save
              </button>
            )}
            <button
              className="cta__cancel"
              type="button"
              onClick={() => {
                setIsAddressFormOpen(false);
                setIsEditingAddress(false);
                setAddressFormData({
                  name: '',
                  address: '',
                  tel: '',
                  country: '',
                  postalCode: '',
                });
              }}>
              Cancel
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

AddressModal.propTypes = {
  currentId: PropTypes.string.isRequired,
  isEditingAddress: PropTypes.bool.isRequired,
  addressFormData: PropTypes.object.isRequired,
  setIsAddressFormOpen: PropTypes.func.isRequired,
  setIsEditingAddress: PropTypes.func.isRequired,
  setAddressFormData: PropTypes.func.isRequired,
};

export { AddressModal };
