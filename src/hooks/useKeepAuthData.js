import { useEffect } from "react";
import { useAuthContext } from "../hooks";

const useKeepAuthData = () => {
  const {
    currentUser,
    isUserLogedIn,
    setIsUserLogedIn,
    setCurrentUser
    } = useAuthContext();

  useEffect(() => {
    let currentUserData = JSON.parse(localStorage.getItem("token"));
    let loginStatus = JSON.parse(localStorage.getItem("login"));

    if (currentUserData !== undefined && loginStatus !== undefined) {
      setIsUserLogedIn(loginStatus);
      setCurrentUser(currentUserData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(currentUser));
    localStorage.setItem("login", isUserLogedIn);
  }, [isUserLogedIn, currentUser]);
};

export { useKeepAuthData };
