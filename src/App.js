// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthProvider';
import PrivateRoute from './contexts/PrivateRoute';
import LoginPage from './screens/LoginPage';
import ProfilePage from './screens/ProfilePage';
import Dashboard from './screens/Dashboard';
import NotFound from './components/error/404error';
import LayoutComponent from './layouts/LayoutComponent';
import MainLayout from './screens/MainLayout';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="" element={<LoginPage />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          
          {/* Protected Routes with Layout */}
          <Route path="main" element={<MainLayout/>}>
            <Route index={true} element={<Dashboard/>}/>
            <Route path='profile' element={<ProfilePage/>}/>
          </Route>
          
          {/* 404 Not Found Page (standalone) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
