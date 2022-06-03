import { useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useStateContext } from './useStateContext';
import { useAuthContext } from './useAuthContext';

const useInitializeData = () => {
  const { stateDispatch } = useStateContext();
  const { myToken, isUserLogedIn } = useAuthContext();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/api/products');
        if (res.status === 200) {
          stateDispatch({
            type: 'GET_PRODUCT_DATA',
            payload: res.data.products,
          });
        }
      } catch (err) {
        toast.error('Unable to fetch data');
      }
    })();
  }, [isUserLogedIn]);

  useEffect(() => {
    if (myToken) {
      (async () => {
        try {
          const res = await axios.get('api/user/wishlist', {
            headers: { authorization: myToken },
          });
          if (res.status === 200) {
            stateDispatch({
              type: 'GET_WISHLIST_DATA',
              payload: res.data.wishlist,
            });
          }
        } catch (err) {
          toast.error('Unable to fetch data');
        }
      })();
    }
  }, []);

  useEffect(() => {
    if (myToken) {
      (async () => {
        try {
          const res = await axios.get('/api/user/cart', {
            headers: { authorization: myToken },
          });
          if (res.status === 200) {
            stateDispatch({ type: 'GET_CART_DATA', payload: res.data.cart });
          }
        } catch (err) {
          toast.error('Unable to fetch data');
        }
      })();
    }
  }, []);
};

export { useInitializeData };
