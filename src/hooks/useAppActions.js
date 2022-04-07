import axios from "axios";
import { useAuth } from "./useAuth";
import { useStateContext } from "./useStateContext";

const useAppActions = () => {
  const { myToken } = useAuth();
  const { state, stateDispatch } = useStateContext();

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

  const addItemToTheWishlist = async ({ e, product, stateDispatch }) => {
    e.stopPropagation();
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
    } catch (err) {
      console.error(err);
    }
  };

  const removeItemFromWishlist = async ({ e, _id, stateDispatch }) => {
    e.stopPropagation();
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
    } catch (err) {
      console.error(err);
    }
  };

  const addProductsToCart = async ({ e, product, stateDispatch }) => {
    e.stopPropagation();

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
    } catch (err) {
      console.error(err);
    }
  };

  const removeProductsFromCart = async ({ _id, stateDispatch }) => {
    try {
      const res = await axios.delete(`/api/user/cart/${_id}`, {
        headers: { authorization: myToken },
      });
      if (res.status === 200 || res.status === 201) {
        stateDispatch({ type: "GET_CART_DATA", payload: res.data.cart });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateCartQuantity = async (_id, type) => {
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
      if (res.status === 200 || res.status === 201) {
        stateDispatch({ type: "GET_CART_DATA", payload: res.data.cart });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const moveItemToCart = async ({ e, _id, product, stateDispatch }) => {
    if (state.cartData.some((item) => item._id === product._id)) {
      removeItemFromWishlist({ e, _id, stateDispatch });
      const arr = state.cartData.map((item) => {
        if (item._id === product._id) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
      stateDispatch({ type: "GET_CART_DATA", payload: arr });
    } else {
      removeItemFromWishlist({ e, _id, stateDispatch });
      addProductsToCart({ e, product, stateDispatch });
    }
  };

  const moveToWishlist = async ({ _id, product, stateDispatch }) => {
    if (state.wishlistData.some((item) => item._id === product._id)) {
      removeProductsFromCart({ _id, stateDispatch });
      return;
    }
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
    } catch (err) {
      console.error(err);
    }
  };

  const removeAllItemsFromCart = async () => {
    try {
      const res = await axios.delete("api/user/cart", {
        headers: {
          authorization: myToken,
        },
      });
      if (res.status === 200) {
        stateDispatch({ type: "GET_CART_DATA", payload: res.data.cart });
      }
    } catch (err) {
      console.error(err);
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
    removeAllItemsFromCart,
  };
};

export { useAppActions };
