import React from 'react';
import { Link } from 'react-router-dom'

const Login = ()=> {
    return (
        <div className="Home-app">
            <h2>Welcome to login component</h2>
            <Link to="/app">Login</Link>
        </div>
    );
}


export default Login