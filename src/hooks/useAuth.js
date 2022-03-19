import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

const useAuth = () => {
  const { 
    currentUser, 
    setCurrentUser, 
    isUserLogedIn, 
    setIsUserLogedIn 
    } = useAuthContext();
    const navigate = useNavigate();

  const loginUser = async (email, password, from) => {
    try {
      const res = await axios.post('/api/auth/login', {
        email, 
        password
      });
      if(res.status === 200 || res.status === 201) {
        setCurrentUser(res.data);
      }
      setIsUserLogedIn(true);
      if(from) {
        navigate(from);
      } else {
        navigate('/')
      }
    } catch (err) {
      console.error(err);
    }
  }

  const logoutUser = () => {
    setIsUserLogedIn(false);
    setCurrentUser({});
    navigate('/');
  }

  return {
    loginUser,
    logoutUser,
    isUserLogedIn,
    currentUser
  }
};

export { useAuth };