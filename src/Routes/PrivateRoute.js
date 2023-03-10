import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const location=useLocation()
    const {user,loading}=useContext(AuthContext)
      if(loading){
        return <button className="btn btn-square mt-5 loading grid mx-auto"></button>
      }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children
};

export default PrivateRoute;