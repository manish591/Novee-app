import React from "react";
import { AddressCardButton } from "./AddressCardButton";

const AddressCard = () => {
  return (
    <article className="address-card">
      <section className="address-card__wrapper">
        <h4 className="address-card__name">Manish</h4>
        <p className="address-card__address">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ab!
        </p>
        <p className="address-card__country">India</p>
        <p className="address-card__telephone">Phone Number: 6396653091</p>
      </section>
      <AddressCardButton />
    </article>
  );
};

export { AddressCard };
