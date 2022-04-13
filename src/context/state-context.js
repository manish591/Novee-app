import React, { createContext, useReducer } from "react";
import { stateReducer } from "../reducer/state-reducer";

const StateContext = createContext();

const StateContextProvider = ({ children }) => {
  const [state, stateDispatch] = useReducer(stateReducer, {
    wishlistData: [],
    cartData: [],
    productData: [],
    addressData: [],
    filters: {
      sort: "",
      fastDelivery: "",
      includeOutOfStock: "",
      rating: [],
      price: [],
      category: [],
      brand: [],
      idealFor: "",
      searchQuery: "",
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
