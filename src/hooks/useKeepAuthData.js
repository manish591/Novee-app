import { useEffect } from "react";
import { useAuthContext } from "../hooks";
import { useStateContext } from "./useStateContext";

const useKeepAuthData = () => {
  const {
    currentUser,
    isUserLogedIn,
    setIsUserLogedIn,
    setCurrentUser,
    myToken,
    setMyToken,
  } = useAuthContext();

  const { stateDispatch } = useStateContext();

  useEffect(() => {
    let currentUserData = JSON.parse(localStorage.getItem("user"));
    let loginStatus = JSON.parse(localStorage.getItem("login"));
    let tokenValue = JSON.parse(localStorage.getItem("token"));

    if (currentUserData !== undefined && loginStatus !== undefined) {
      setIsUserLogedIn(loginStatus);
      setCurrentUser(currentUserData);
      setMyToken(tokenValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
    localStorage.setItem("login", isUserLogedIn);
    localStorage.setItem("token", JSON.stringify(myToken));

    // stateDispatch({ type: 'GET_CART_DATA', payload: currentUser.cart });
    // stateDispatch({ type: 'GET_WISHLIST_DATA', payload: currentUser.wishlist });

  }, [isUserLogedIn, currentUser, myToken]);
};

export { useKeepAuthData };
