import React, { createContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [isUserLogedIn, setIsUserLogedIn] = useState(
    JSON.parse(localStorage.getItem("login"))
  );
  const [myToken, setMyToken] = useState(
    JSON.parse(localStorage.getItem("token"))
  );

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isUserLogedIn,
        setIsUserLogedIn,
        myToken,
        setMyToken
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
