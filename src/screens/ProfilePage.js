// src/screens/ProfilePage.js
import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';
// import CustomMessage from '../components/notification/CustomMessage';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user,setUser } = useAuth();
  // CustomMessage('Login successful');
  const exitApplication = () => {
      setUser(null);
      localStorage.removeItem('user');
      localStorage.removeItem('loginTimestamp');
      navigate('')
  };
  useEffect(()=>{
    console.log(user);
  },[user])
  return (
    <div>
      <h2>Profile</h2>
      <p>Welcome, 
      {user?.data?.data?.user_data.user_email}
      </p>
      <button onClick={exitApplication}>Logout</button>
    </div>
  );
};

export default ProfilePage;
