import React,{useEffect} from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthProvider';
import LayoutComponent from '../layouts/LayoutComponent';

const MainLayout = () => {
    const navigate = useNavigate();
  const {login, isAuthenticated, loading } = useAuth();
    
  // redirect is login dashboard
//   useEffect(() => {
//     if (!loading && isAuthenticated()) {
//       navigate('/main');
//     }
//   }, [login,isAuthenticated]);



  return (
    <>
        {
            !isAuthenticated() ? <Navigate to={'/'} replace /> : <LayoutComponent><Outlet/></LayoutComponent>
        
        }
    </>
    
  )
}

export default MainLayout