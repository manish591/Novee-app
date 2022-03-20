import axios from "axios";
import { useAuth } from "./useAuth";
import { useStateContext } from "./useStateContext";

const useAppActions = () => {
  const { currentUser } = useAuth();
  const { stateDispatch } = useStateContext();

  const isAlreadyInDatabase = (arr, _id) =>
    arr.some((item) => item._id === _id);

  const findDiscountedPrice = (originalPrice, discountRate) => {
    return (
      originalPrice -
      (originalPrice * Number(discountRate)) / 100
    ).toFixed(0);
  };

  const findTotalPrice = (arr) => {
    return arr.reduce(
      (total, currentValue) =>
        (total = total + Number(currentValue.price) * Number(currentValue.qty)),
      0
    );
  };

  const addItemToTheWishlist = async ({
    product,
    _id,
    setIsLoading,
    currentUser,
    stateDispatch,
  }) => {
    setIsLoading(true);
    try {
      let res = await axios.post(
        "/api/user/wishlist",
        { product },
        {
          headers: { authorization: currentUser.encodedToken },
        }
      );
      if (res.status === 201 || res.status === 200) {
        stateDispatch({
          type: "GET_WISHLIST_DATA",
          payload: res.data.wishlist,
        });
      }
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const removeItemFromWishlist = async ({
    _id,
    setIsLoading,
    stateDispatch,
    currentUser,
  }) => {
    setIsLoading(true);
    try {
      let res = await axios.delete(`/api/user/wishlist/${_id}`, {
        headers: {
          authorization: currentUser.encodedToken,
        },
      });
      if (res.status === 201 || res.status === 200) {
        stateDispatch({
          type: "GET_WISHLIST_DATA",
          payload: res.data.wishlist,
        });
      }
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const addProductsToCart = async ({
    _id,
    product,
    currentUser,
    stateDispatch,
    setIsLoading,
  }) => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        "/api/user/cart",
        { product },
        {
          headers: { authorization: currentUser.encodedToken },
        }
      );
      if (res.status === 200 || res.status === 201) {
        stateDispatch({ type: "GET_CART_DATA", payload: res.data.cart });
      }
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const removeProductsFromCart = async ({
    _id,
    currentUser,
    stateDispatch,
    setIsLoading,
  }) => {
    setIsLoading(true);
    try {
      const res = await axios.delete(`/api/user/cart/${_id}`, {
        headers: { authorization: currentUser.encodedToken },
      });
      console.log(res);
      if (res.status === 200 || res.status === 201) {
        stateDispatch({ type: "GET_CART_DATA", payload: res.data.cart });
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const updateCartQuantity = async (_id, type, setIsLoading) => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        `/api/user/cart/${_id}`,
        {
          action: {
            type,
          },
        },
        {
          headers: { authorization: currentUser.encodedToken },
        }
      );
      console.log(res);
      if (res.status === 200 || res.status === 201) {
        stateDispatch({ type: `GET_CART_DATA`, payload: res.data.cart });
      }
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isAlreadyInDatabase,
    addItemToTheWishlist,
    removeItemFromWishlist,
    findDiscountedPrice,
    addProductsToCart,
    removeProductsFromCart,
    findTotalPrice,
    updateCartQuantity,
  };
};

export { useAppActions };
