// src/screens/LoginPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

import { Container, TextField, Button, Typography, Grid, Paper } from '@mui/material';



const LoginPage = () => {
  // const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('password');
  const { isAuthenticated, loading, login } = useAuth();



  useEffect(() => {
    // Redirect to dashboard if user is authenticated
    if (!loading && isAuthenticated()) {
      navigate('/dashboard');
    }
  }, [loading, isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock authentication
    if (email === 'user@example.com' && password === 'password') {
      const userData = { email };
      login(userData);

      // Redirect to profile page after login
      navigate('/profile');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
