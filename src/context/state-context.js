import React, { createContext, useReducer } from "react";
import { stateReducer } from "../reducer/state-reducer";

const StateContext = createContext();

const StateContextProvider = ({ children }) => {
  const [state, stateDispatch] = useReducer(stateReducer, {
    wishlistData: [],
    cartData: [],
    productData: [],
    filters: {
      sort: "",
      fastDelivery: "",
      inStock: '',
      category: [],
    },
  });
  return (
    <StateContext.Provider
      value={{
        state,
        stateDispatch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export { StateContextProvider, StateContext };
