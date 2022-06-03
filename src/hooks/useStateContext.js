import { useContext } from 'react';
import { StateContext } from '../context/state-context';

const useStateContext = () => {
  return useContext(StateContext);
};

export { useStateContext };
