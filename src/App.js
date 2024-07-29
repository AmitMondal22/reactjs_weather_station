// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthProvider';
import PrivateRoute from './contexts/PrivateRoute';
import HomePage from './screens/HomePage';
import LoginPage from './screens/LoginPage';
import ProfilePage from './screens/ProfilePage';
import Dashboard from './screens/Dashboard';
import NotFound from './components/error/404error';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<LoginPage />} />
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />



        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
