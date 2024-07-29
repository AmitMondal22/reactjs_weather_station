// src/components/AuthProvider.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a Context for the authentication state
const AuthContext = createContext();

// Custom hook to access authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component that wraps the entire app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const savedUser = localStorage.getItem('user');
        const savedTimeStamp = localStorage.getItem('loginTimestamp');

        if (savedUser && savedTimeStamp) {
          const currentTime = new Date().getTime();
          const timeElapsed = currentTime - parseInt(savedTimeStamp, 10);

          if (timeElapsed < 86400000) {
            setUser(JSON.parse(savedUser));
          } else {
            localStorage.removeItem('user');
            localStorage.removeItem('loginTimestamp');
          }
        }
      } catch (error) {
        console.error("Failed to initialize authentication:", error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = (userData) => {
    setUser(userData);
    const currentTime = new Date().getTime();
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('loginTimestamp', currentTime.toString());
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('loginTimestamp');
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
