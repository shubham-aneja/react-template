import React from 'react';
import { Link } from 'react-router'

const Login = ()=> {
    return (
        <div className="Home-app">
            <h2>Welcome to login component</h2>
            <Link onClick={()=> {
                localStorage.setItem('userInfo', 'abhi aaega, wait karo')
            }} to="/app">Login</Link>
        </div>
    );
}


export default Login