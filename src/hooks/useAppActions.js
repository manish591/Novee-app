import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from './useAuth';
import { useStateContext } from './useStateContext';

const useAppActions = () => {
  const { myToken } = useAuth();
  const { state, stateDispatch } = useStateContext();

  const isAlreadyInDatabase = (arr, _id) =>
    arr?.some((item) => item._id === _id);

  const findTotalDiscountedPrice = (arr) => {
    return arr.reduce(
      (acc, curr) =>
        acc + (curr.price - (curr.price * Number(curr.discount)) / 100),
      0,
    );
  };

  const findTotalPrice = (arr) => {
    return arr.reduce(
      (total, currentValue) =>
        total + Number(currentValue.price) * Number(currentValue.qty),
      0,
    );
  };

  const findDiscountedPrice = (originalPrice, discountRate) => {
    return originalPrice - (originalPrice * discountRate) / 100;
  };

  const getTotalCartPrice = (arr) => {
    return findTotalDiscountedPrice(arr) - 45;
  };

  const addItemToTheWishlist = async ({ e, product, setDisableButton }) => {
    e.stopPropagation();
    setDisableButton(true);
    try {
      const res = await axios.post(
        '/api/user/wishlist',
        { product },
        {
          headers: { authorization: myToken },
        },
      );
      if (res.status === 201 || res.status === 200) {
        stateDispatch({
          type: 'GET_WISHLIST_DATA',
          payload: res.data.wishlist,
        });
        toast('Product added to the wishlist');
        setDisableButton(false);
      }
    } catch (err) {
      toast.error('Unable to add product to the wishlist! Try again later');
      setDisableButton(false);
    } finally {
      setDisableButton(false);
    }
  };

  const removeItemFromWishlist = async ({ e, _id, setDisableButton }) => {
    setDisableButton(true);
    e.stopPropagation();
    try {
      const res = await axios.delete(`/api/user/wishlist/${_id}`, {
        headers: {
          authorization: myToken,
        },
      });
      if (res.status === 201 || res.status === 200) {
        stateDispatch({
          type: 'GET_WISHLIST_DATA',
          payload: res.data.wishlist,
        });
        toast('Item removed from the wishlist');
        setDisableButton(false);
      }
    } catch (err) {
      toast.error('Unable to remove item from the wishlist! Try Again later');
      setDisableButton(false);
    } finally {
      setDisableButton(false);
    }
  };

  const addProductsToCart = async ({ e, product, setDisableButton }) => {
    e.stopPropagation();
    setDisableButton(true);
    try {
      const res = await axios.post(
        '/api/user/cart',
        { product },
        {
          headers: { authorization: myToken },
        },
      );
      if (res.status === 200 || res.status === 201) {
        stateDispatch({ type: 'GET_CART_DATA', payload: res.data.cart });
        toast('Item added to the cart');
        setDisableButton(false);
      }
    } catch (err) {
      toast.error('Unable to add item to the cart! Try again later');
      setDisableButton(false);
    } finally {
      setDisableButton(false);
    }
  };

  const removeProductsFromCart = async ({ _id, setDisableButton }) => {
    setDisableButton(true);
    try {
      const res = await axios.delete(`/api/user/cart/${_id}`, {
        headers: { authorization: myToken },
      });
      if (res.status === 200 || res.status === 201) {
        stateDispatch({ type: 'GET_CART_DATA', payload: res.data.cart });
        toast('Item removed from the cart');
        setDisableButton(false);
      }
    } catch (err) {
      toast.error('Unable to remove item from the cart! Try again later');
      setDisableButton(false);
    } finally {
      setDisableButton(false);
    }
  };

  const updateCartQuantity = async (_id, type, setDisableButton) => {
    setDisableButton(true);
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
        },
      );
      if (res.status === 200 || res.status === 201) {
        stateDispatch({ type: 'GET_CART_DATA', payload: res.data.cart });
        toast('Product quantity has been updated');
        setDisableButton(false);
      }
    } catch (err) {
      toast.error('Unable to updated cart qunatity! Try again later');
      setDisableButton(false);
    } finally {
      setDisableButton(false);
    }
  };

  const moveItemToCart = async ({ e, _id, product, setDisableButton }) => {
    setDisableButton(true);
    if (state.cartData.some((item) => item._id === product._id)) {
      removeItemFromWishlist({ e, _id, stateDispatch });
      const arr = state.cartData.map((item) => {
        if (item._id === product._id) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
      stateDispatch({ type: 'GET_CART_DATA', payload: arr });
    } else {
      removeItemFromWishlist({ e, _id, stateDispatch });
      addProductsToCart({ e, product, stateDispatch });
    }
    toast('Item has been move to the cart');
    setDisableButton(false);
  };

  const moveToWishlist = async ({ _id, product, setDisableButton }) => {
    if (state.wishlistData.some((item) => item._id === product._id)) {
      removeProductsFromCart({ _id, stateDispatch });
      return;
    }
    setDisableButton(true);
    try {
      const res = await Promise.all([
        axios.delete(`/api/user/cart/${_id}`, {
          headers: { authorization: myToken },
        }),
        axios.post(
          '/api/user/wishlist',
          { product },
          {
            headers: { authorization: myToken },
          },
        ),
      ]);
      if (res[0].status === 200) {
        stateDispatch({ type: 'GET_CART_DATA', payload: res[0].data.cart });
      }
      if (res[1].status === 201) {
        stateDispatch({
          type: 'GET_WISHLIST_DATA',
          payload: res[1].data.wishlist,
        });
      }
      toast('Item Has moved to the wishlist');
      setDisableButton(false);
    } catch (err) {
      toast.error('Unable to move item to the wishlist');
      setDisableButton(false);
    } finally {
      setDisableButton(false);
    }
  };

  const removeAllItemsFromCart = async () => {
    try {
      const res = await axios.delete('/api/user/cart', {
        headers: {
          authorization: myToken,
        },
      });
      if (res.status === 200) {
        stateDispatch({ type: 'GET_CART_DATA', payload: res.data.cart });
        toast('Your cart is cleared');
      }
    } catch (err) {
      toast.error('Unable to clear your cart! Try again later');
    }
  };

  return {
    isAlreadyInDatabase,
    addItemToTheWishlist,
    removeItemFromWishlist,
    findTotalDiscountedPrice,
    addProductsToCart,
    removeProductsFromCart,
    findTotalPrice,
    updateCartQuantity,
    moveItemToCart,
    moveToWishlist,
    removeAllItemsFromCart,
    findDiscountedPrice,
    getTotalCartPrice,
  };
};

export { useAppActions };
