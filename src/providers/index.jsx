import React, { createContext, useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';
import { initialState, AppReducer } from '../reducers';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
