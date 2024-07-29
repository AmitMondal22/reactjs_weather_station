// src/screens/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the home page. Please <Link to="/login">login</Link> to access your profile.</p>
    </div>
  );
};

export default HomePage;
