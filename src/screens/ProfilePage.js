// src/screens/ProfilePage.js
import React from 'react';
import { useAuth } from '../contexts/AuthProvider';

const ProfilePage = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Profile</h2>
      <p>Welcome, {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default ProfilePage;
