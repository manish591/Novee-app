import React, { useState } from "react";

const AddressModal = () => {
  return (
    <div className="address-form">
      <div className="address-form__wrapper">
        <h3 className="address-form__title">Add New Address</h3>
        <form className="address-form__container">
          <section className="address-form__group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              aria-describedby="name-validation"
              required
            />
            <p
              id="name-validation"
              aria-live="assertive"
              className="validation-message"
            >
              {/* Error will show here */}
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
              required
            ></textarea>
            <p
              id="address-validation"
              aria-live="assertive"
              className="validation-message"
            >
              {/* Error will show here */}
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
              required
            />
            <p
              id="postal-code-validation"
              aria-live="assertive"
              className="validation-message"
            >
              {/* Error will show here */}
            </p>
          </section>

          <section className="address-form__group">
            <label htmlFor="country">Country</label>
            <select
              name="country"
              id="country"
              autoComplete="country"
              aria-describedby="country-validation"
              required
            >
              <option></option>
            </select>
            <p
              id="country-validation"
              aria-live="assertive"
              className="validation-message"
            >
              {/* Error will show here */}
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
              required
            />
            <p
              id="tel-validation"
              aria-live="assertive"
              className="validation-message"
            >
              {/* Error will show here */}
            </p>
          </section>

          <section className="address-form__cta cta">
            {2 === 3 ? (
              <button type="button" className="cta__submit">
                Update
              </button>
            ) : (
              <button className="cta__submit">Save</button>
            )}
            <button className="cta__cancel" type="button">
              Cancel
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export { AddressModal };
