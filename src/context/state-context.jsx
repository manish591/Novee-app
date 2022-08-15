import React, { createContext, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { stateReducer, initialDataState, initialFilterState } from 'reducer';

const StateContext = createContext();

const StateContextProvider = ({ children }) => {
  const [disableButton, setDisableButton] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [state, stateDispatch] = useReducer(stateReducer, {
    data: {
      ...initialDataState,
    },
    filters: {
      ...initialFilterState,
    },
  });
  return (
    <StateContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        state: { ...state, ...state.data },
        disableButton,
        couponCode,
        stateDispatch,
        setDisableButton,
        setCouponCode,
      }}>
      {children}
    </StateContext.Provider>
  );
};

StateContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { StateContextProvider, StateContext };
