import { useState, useEffect } from "react";
import { useStateContext } from "./useStateContext";
import { useAuthContext } from "./useAuthContext";
import toast from "react-hot-toast";
import axios from "axios";

const useUserAddress = () => {
  const { state, stateDispatch } = useStateContext();
  const { myToken } = useAuthContext();

  const [addressFormData, setAddressFormData] = useState({
    name: "",
    address: "",
    tel: "",
    country: "",
    postalCode: "",
  });

  const [currentId, setCurrentId] = useState("");
  const [isAddressFormOpen, setIsAddressFormOpen] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);

  const addAddress = async ({ address }) => {
    try {
      const res = await axios.post(
        "/api/user/address",
        {
          address,
        },
        {
          headers: {
            authorization: myToken,
          },
        }
      );
      if (res.status === 201) {
        stateDispatch({ type: "GET_ADDRESS_DATA", payload: res.data.address });
        toast("Address successfully added");
      }
    } catch (err) {
      console.error("Error Adding address", err);
      toast.error("Unable to add address! Try again later");
    }
  };

  const deleteAddress = async ({ _id }) => {
    try {
      const res = await axios.delete(`/api/user/address/${_id}`, {
        headers: {
          authorization: myToken,
        },
      });
      if (res.status === 200) {
        stateDispatch({ type: "GET_ADDRESS_DATA", payload: res.data.address });
        toast("Your address deleted!");
      }
    } catch (err) {
      console.error("Error in deleting address", err);
      toast.error("Unable to delete address! Try again later");
    }
  };

  const updateAddress = async ({ address, _id }) => {
    try {
      const res = await axios.post(
        `/api/user/address/${_id}`,
        {
          address,
        },
        {
          headers: {
            authorization: myToken,
          },
        }
      );
      if (res.status === 200) {
        stateDispatch({ type: "GET_ADDRESS_DATA", payload: res.data.address });
        toast("Your address updated");
      }
    } catch (err) {
      console.error("Error upadating address", err);
      toast.error("Unable to update address! Try again later");
    }
  };

  return {
    addAddress,
    deleteAddress,
    updateAddress,
    addressFormData,
    setAddressFormData,
    currentId,
    setCurrentId,
    isAddressFormOpen,
    setIsAddressFormOpen,
    isEditingAddress,
    setIsEditingAddress,
  };
};

export { useUserAddress };
