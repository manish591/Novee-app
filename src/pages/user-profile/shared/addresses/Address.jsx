import React, { useState, useEffect } from 'react';
import './Address.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useStateContext, useAuthContext, useUserAddress } from 'hooks';
import { AddressCard } from './AddressCard';
import { AddressModal } from './AddressModal';

const AddressPage = () => {
  const [myAddressData, setMyAddressData] = useState([]);
  const { state } = useStateContext();
  const { addressData } = state;
  const { myToken } = useAuthContext();
  const {
    currentId,
    addressFormData,
    isAddressFormOpen,
    isEditingAddress,
    setCurrentId,
    setAddressFormData,
    setIsAddressFormOpen,
    setIsEditingAddress,
  } = useUserAddress();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/api/user/address', {
          headers: {
            authorization: myToken,
          },
        });
        if (res.status === 200) {
          setMyAddressData(res.data.address);
        }
      } catch (err) {
        toast.error('Error ocuured try again later');
      }
    })();
  }, [addressData]);

  return (
    <div className="address-page">
      <div className="address-page__top flex">
        <h1>Saved Address</h1>
        <button
          type="button"
          className="btn btn--outlined-primary address-page__add"
          onClick={() => setIsAddressFormOpen(!isAddressFormOpen)}>
          + Add New Address
        </button>
      </div>
      <div className="address-page__container grid">
        {myAddressData.map((item) => {
          return (
            <AddressCard
              key={item._id}
              // eslint-disable-next-line react/jsx-props-no-spreading
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
