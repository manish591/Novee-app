import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks';

const ProtectedRoute = ({ children }) => {
  const { isUserLogedIn } = useAuth();
  const location = useLocation();

  return (
    <div>
      {isUserLogedIn ? (
        children
      ) : (
        <Navigate to="/login" state={location.pathname} />
      )}
    </div>
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export { ProtectedRoute };
