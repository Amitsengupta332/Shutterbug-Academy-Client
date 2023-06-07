import React from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = () => {
    const { user, loading } = useContext(AuthContext)

    
    const location = useLocation()

    if(loading){
        return <button className="btn btn-square loading"></button>
    }

    if (user?.email) {
        return children;
    }


    return <Navigate to='/login' state={{from: location}}  replace ></Navigate>
};

export default PrivateRoutes;