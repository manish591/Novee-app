import { useState, useEffect } from "react";
import { useStateContext } from "./useStateContext";
import { useAuthContext } from "./useAuthContext";
import toast from "react-hot-toast";
import axios from "axios";

const useUserAddress = () => {
  const { state, stateDispatch } = useStateContext();
  const { myToken } = useAuthContext();

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

  return {
    addAddress,
  };
};

export { useUserAddress };
