import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({isLoggedIn,children}) => {
  if (isLoggedIn) {
    return children;
  }
  else {
    return <Navigate to="/study-notion/login"/>
  }
}

export default PrivateRoute;