import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoute = ({ children }) => {
    let { user,loading } = use(AuthContext);
    console.log(user);
    if (loading) {
        return <Loading></Loading>

    }
    if (user&&user.email) {
        return children
        
    }
    return <Navigate to='/auth/login'></Navigate>
  
 
};

export default PrivateRoute;