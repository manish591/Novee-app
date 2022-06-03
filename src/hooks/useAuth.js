import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuthContext } from './useAuthContext';
import { useStateContext } from './useStateContext';

const useAuth = () => {
  const {
    currentUser,
    setCurrentUser,
    isUserLogedIn,
    setIsUserLogedIn,
    myToken,
    setMyToken,
  } = useAuthContext();

  const { stateDispatch } = useStateContext();

  const navigate = useNavigate();

  const loginUser = async (email, password, from) => {
    try {
      const res = await axios.post('/api/auth/login', {
        email,
        password,
      });
      if (res.status === 200 || res.status === 201) {
        setCurrentUser(res.data.foundUser);
        setIsUserLogedIn(true);
        setMyToken(res.data.encodedToken);
        stateDispatch({
          type: 'GET_CART_DATA',
          payload: res.data.foundUser.cart,
        });
        stateDispatch({
          type: 'GET_WISHLIST_DATA',
          payload: res.data.foundUser.wishlist,
        });
        toast.success('Loged In Successfully');
      }
      if (from) {
        navigate(from);
      } else {
        navigate('/');
      }
    } catch (err) {
      toast.error('Unable To Login! Try Later');
    }
  };

  const signupUser = async (name, email, password) => {
    try {
      const res = await axios.post('/api/auth/signup', {
        firstName: name,
        lastName: 'some',
        email,
        password,
      });
      if (res.status === 201) {
        setCurrentUser(res.data.createdUser);
        setIsUserLogedIn(true);
        setMyToken(res.data.encodedToken);
        stateDispatch({
          type: 'GET_CART_DATA',
          payload: res.data.createdUser.cart,
        });
        stateDispatch({
          type: 'GET_WISHLIST_DATA',
          payload: res.data.createdUser.wishlist,
        });
        toast.success('Account Has Been Created');
      }
      navigate('/');
    } catch (err) {
      toast.error('Unable To Create Your Account! Try Again Later');
    }
  };

  const logoutUser = () => {
    setIsUserLogedIn(false);
    setCurrentUser({});
    setMyToken('');
    stateDispatch({ type: 'CLEAR_USER_DATA' });
    navigate('/');
    toast('Logout Successfully');
  };

  return {
    loginUser,
    logoutUser,
    isUserLogedIn,
    currentUser,
    signupUser,
    myToken,
  };
};

export { useAuth };
