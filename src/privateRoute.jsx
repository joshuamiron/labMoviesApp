import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from './contexts/authContext'

const PrivateRoute = ({ children }) => {
    const context = useContext(AuthContext)
    return context.isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
