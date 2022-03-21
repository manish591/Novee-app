import React, { createContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('token')));
  const [isUserLogedIn, setIsUserLogedIn] = useState(JSON.parse(localStorage.getItem('login')));

  return (
    <AuthContext.Provider value={{
        currentUser,
        setCurrentUser,
        isUserLogedIn,
        setIsUserLogedIn
    }}
    >
      {children}
    </AuthContext.Provider>);
};

export { AuthContextProvider, AuthContext };