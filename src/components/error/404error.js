import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import errorAnimation from '../../assets/lottie/Animation - 1722259034249.json'; // Replace with your Lottie file path
import { useAuth } from '../../contexts/AuthProvider';

const NotFound = () => {
  const {isAuthenticated} = useAuth();
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate(isAuthenticated() ? 'main' : '');
  };

  return (
    <div style={styles.container}>
      <Lottie animationData={errorAnimation} style={styles.animation} />
      <h1 style={styles.title}>Page Not Found</h1>
      <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
      <button onClick={handleGoHome} style={styles.button}>

      Go To
      {
            isAuthenticated() ? ' Home' : ' Login'
      }
     
      
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  },
  animation: {
    width: '300px',
    height: '300px',
  },
  title: {
    fontSize: '2rem',
    margin: '20px 0',
  },
  message: {
    fontSize: '1.2rem',
    margin: '10px 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
  },
};

export default NotFound;
