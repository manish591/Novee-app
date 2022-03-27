import axios from "axios";
import { useAuth } from "./useAuth";
import { useStateContext } from "./useStateContext";

const useAppActions = () => {
  const { currentUser, myToken } = useAuth();
  const { stateDispatch } = useStateContext();

  const isAlreadyInDatabase = (arr, _id) =>
    arr?.some((item) => item._id === _id);

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
          headers: { authorization: myToken },
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
          authorization: myToken,
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
          headers: { authorization: myToken },
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
    stateDispatch,
    setIsLoading,
  }) => {
    setIsLoading(true);
    try {
      const res = await axios.delete(`/api/user/cart/${_id}`, {
        headers: { authorization: myToken },
      });
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
          headers: { authorization: myToken },
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

  const moveItemToCart = async ({
    _id,
    product,
    setIsLoading,
    stateDispatch,
  }) => {
    setIsLoading(true);
    try {
      let res = await Promise.all([
        axios.delete(`/api/user/wishlist/${_id}`, {
          headers: {
            authorization: myToken,
          },
        }),
        axios.post(
          "/api/user/cart",
          { product },
          {
            headers: { authorization: myToken },
          }
        ),
      ]);
      if (res[0].status === 200) {
        stateDispatch({
          type: "GET_WISHLIST_DATA",
          payload: res[0].data.wishlist,
        });
      }
      if (res[1].status === 201) {
        stateDispatch({ type: "GET_CART_DATA", payload: res[1].data.cart });
      }
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const moveToWishlist = async ({
    _id,
    product,
    setIsLoading,
    stateDispatch,
  }) => {
    setIsLoading(true);
    try {
      let res = await Promise.all([
        axios.delete(`/api/user/cart/${_id}`, {
          headers: { authorization: myToken },
        }),
        axios.post(
          "/api/user/wishlist",
          { product },
          {
            headers: { authorization: myToken },
          }
        ),
      ]);
      if (res[0].status === 200) {
        stateDispatch({ type: "GET_CART_DATA", payload: res[0].data.cart });
      }
      if (res[1].status === 201) {
        stateDispatch({
          type: "GET_WISHLIST_DATA",
          payload: res[1].data.wishlist,
        });
      }
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
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
    moveItemToCart,
    moveToWishlist,
  };
};

export { useAppActions };
