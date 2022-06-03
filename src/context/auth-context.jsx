import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')),
  );
  const [isUserLogedIn, setIsUserLogedIn] = useState(
    JSON.parse(localStorage.getItem('login')),
  );
  const [myToken, setMyToken] = useState(
    JSON.parse(localStorage.getItem('token')),
  );

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        myToken,
        currentUser,
        isUserLogedIn,
        setIsUserLogedIn,
        setCurrentUser,
        setMyToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { AuthContextProvider, AuthContext };
