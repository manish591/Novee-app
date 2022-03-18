import React, { createContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isUserLogedIn, setIsUserLogedIn] = useState(false);

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