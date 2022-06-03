import React, { createContext, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
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
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        state,
        disableButton,
        stateDispatch,
        setDisableButton,
      }}>
      {children}
    </StateContext.Provider>
  );
};

StateContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { StateContextProvider, StateContext };
