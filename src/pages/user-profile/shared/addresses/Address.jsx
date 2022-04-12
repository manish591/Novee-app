import React, { useState, useEffect } from "react";
import "./Address.css";
import { AddressCard } from "./AddressCard";
import { AddressModal } from "./AddressModal";
import { useStateContext, useAuthContext } from "../../../../hooks";
import axios from "axios";

const AddressPage = () => {
  const [isAddressFormOpen, setIsAddressFormOpen] = useState(false);
  const [myAddressData, setMyAddressData] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [addressFormData, setAddressFormData] = useState({
    name: "",
    address: "",
    tel: "",
    country: "",
    postalCode: "",
  });
  const { state } = useStateContext();
  const { addressData } = state;
  const { myToken } = useAuthContext();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/user/address", {
          headers: {
            authorization: myToken,
          },
        });
        if (res.status === 200) {
          setMyAddressData(res.data.address);
        }
      } catch (err) {
        console.error("Error Getting address data", err);
      }
    })();
  }, [addressData]);

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
        {myAddressData.map((item) => {
          return (
            <AddressCard
              key={item._id}
              {...item}
              setCurrentId={setCurrentId}
              currentId={currentId}
              setIsAddressFormOpen={setIsAddressFormOpen}
              setAddressFormData={setAddressFormData}
              setIsEditingAddress={setIsEditingAddress}
            />
          );
        })}
      </div>
      {isAddressFormOpen ? (
        <AddressModal
          setIsAddressFormOpen={setIsAddressFormOpen}
          isEditingAddress={isEditingAddress}
          setIsEditingAddress={setIsEditingAddress}
          addressFormData={addressFormData}
          setAddressFormData={setAddressFormData}
          currentId={currentId}
        />
      ) : null}
    </div>
  );
};

export { AddressPage };
