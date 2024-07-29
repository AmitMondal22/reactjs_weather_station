// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import FullScreen from '../components/loading/FullScreen';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  // Show a loading spinner or message while the authentication status is being determined
  if (loading) {
    return <FullScreen/>
  }

  // Redirect to login page if not authenticated
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
