import { useEffect } from 'react';
import { useAuthContext } from 'hooks';

const useKeepAuthData = () => {
  const {
    currentUser,
    isUserLogedIn,
    setIsUserLogedIn,
    setCurrentUser,
    myToken,
    setMyToken,
  } = useAuthContext();

  useEffect(() => {
    const currentUserData = JSON.parse(localStorage.getItem('user'));
    const loginStatus = JSON.parse(localStorage.getItem('login'));
    const tokenValue = JSON.parse(localStorage.getItem('token'));

    if (currentUserData !== undefined && loginStatus !== undefined) {
      setIsUserLogedIn(loginStatus);
      setCurrentUser(currentUserData);
      setMyToken(tokenValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
    localStorage.setItem('login', isUserLogedIn);
    localStorage.setItem('token', JSON.stringify(myToken));
  }, [isUserLogedIn, currentUser, myToken]);
};

export { useKeepAuthData };
