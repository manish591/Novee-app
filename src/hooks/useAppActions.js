import axios from "axios";

const useAppActions = () => {
  const isAlreadyInDatabase = (arr, _id) =>
    arr.some((item) => item._id === _id);

  const findDiscountedPrice = (originalPrice, discountRate) => {
    return (
      originalPrice -
      (originalPrice * Number(discountRate)) / 100
    ).toFixed(0);
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
      console.log(res);
      if(res.status === 200 || res.status === 201) {
        stateDispatch({ type: 'GET_CART_DATA', payload: res.data.cart })
      }
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const removeProductsFromCart = () => {};

  return {
    isAlreadyInDatabase,
    addItemToTheWishlist,
    removeItemFromWishlist,
    findDiscountedPrice,
    addProductsToCart,
    removeProductsFromCart,
  };
};

export { useAppActions };
