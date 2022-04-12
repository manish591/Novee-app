import React, { useState } from "react";
import "./Address.css";
import { AddressCard } from "./AddressCard";
import { AddressModal } from "./AddressModal";

const AddressPage = () => {
  const [isAddressFormOpen, setIsAddressFormOpen] = useState(false);
  return (
    <div className="address-page">
      <div className="address-page__top flex">
        <h1>Saved Address</h1>
        <button
          className="btn btn--outlined-primary address-page__add"
          onClick={() => setIsAddressFormOpen(!isAddressFormOpen)}
        >
          + Add New Address
        </button>
      </div>
      <div className="address-page__container grid">
        <AddressCard />
        <AddressCard />
      </div>
      {isAddressFormOpen ? <AddressModal /> : null}
    </div>
  );
};

export { AddressPage };
