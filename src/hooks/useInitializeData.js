import { useEffect, useState } from "react";
import { useStateContext } from "./useStateContext";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

const useInitializeData = () => {
  const { state, stateDispatch } = useStateContext();
  const { myToken, isUserLogedIn } = useAuthContext();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/products");
        if (res.status === 200) {
          stateDispatch({
            type: "GET_PRODUCT_DATA",
            payload: res.data.products,
          });
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [isUserLogedIn]);

  useEffect(() => {
    if (myToken) {
      (async () => {
        try {
          const res = await axios.get("api/user/wishlist", {
            headers: { authorization: myToken },
          });
          if (res.status === 200) {
            stateDispatch({
              type: "GET_WISHLIST_DATA",
              payload: res.data.wishlist,
            });
          }
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }, []);

  useEffect(() => {
    if (myToken) {
      (async () => {
        try {
          const res = await axios.get("/api/user/cart", {
            headers: { authorization: myToken },
          });
          if (res.status === 200) {
            stateDispatch({ type: "GET_CART_DATA", payload: res.data.cart });
          }
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }, []);
};

export { useInitializeData };
