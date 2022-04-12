import React, { useState } from "react";
import { AddressCardButton } from "./AddressCardButton";

const AddressCard = ({
  _id,
  address,
  country,
  name,
  postalCode,
  tel,
  currentId,
  setCurrentId,
}) => {
  return (
    <article className="address-card">
      <section
        className="address-card__wrapper"
        onClick={() => {
          setCurrentId(_id);
        }}
      >
        <h4 className="address-card__name">{name}</h4>
        <p className="address-card__address">
          {address}, {postalCode}
        </p>
        <p className="address-card__country">{country}</p>
        <p className="address-card__telephone">Phone Number: {tel}</p>
      </section>
      {currentId === _id && <AddressCardButton />}
    </article>
  );
};

export { AddressCard };