import React from 'react';
import { useHistory } from 'react-router-dom';
import './LoginNavbar.css';

const LoginNavbar = () => {

    const history = useHistory(); 

    return (  
        <div className="loginNavbar">
            <h2 onClick={() => history.push('/login')} >Login</h2>
            <h2 onClick={() => history.push('/register')}>Register</h2>
        </div>
    );
}
 
export default LoginNavbar;