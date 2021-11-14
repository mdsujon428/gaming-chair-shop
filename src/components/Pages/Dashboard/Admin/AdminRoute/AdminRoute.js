import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../../../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user,isAdmin} = useAuth()
    return (
        <Route
            {...rest}
            render={({ location }) => 
            user.email && isAdmin ? (
                children
            ) : (
                <Redirect
                to={{
                    pathname:'/login',
                    state:{from:location}
                }}
                />
            )
        }
        >
        </Route>
    );
};

export default PrivateRoute;