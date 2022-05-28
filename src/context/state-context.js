import React, { createContext, useReducer, useState } from 'react';
import { stateReducer } from '../reducer/state-reducer';

const StateContext = createContext();

const StateContextProvider = ({ children }) => {
  const [disableButton, setDisableButton] = useState(false);
  const [state, stateDispatch] = useReducer(stateReducer, {
    wishlistData: [],
    cartData: [],
    productData: [],
    addressData: [],
    ordersData: [],
    filters: {
      sort: '',
      fastDelivery: '',
      includeOutOfStock: '',
      rating: [],
      price: [],
      category: [],
      brand: [],
      idealFor: '',
      searchQuery: '',
    },
  });
  return (
    <StateContext.Provider
      value={{
        state,
        disableButton,
        stateDispatch,
        setDisableButton,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export { StateContextProvider, StateContext };
