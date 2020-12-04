import { Button } from '@material-ui/core';
import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';
import LoginNavbar from './LoginNavbar';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    return (  
        <div className="login">
            <div className='login__page'>
                <div className="loginPage__head">
                    <h1>Login</h1>
                </div>
                <div className="loginPage__form">
                    <input type="email" className='loginPageForm__email' name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
                    <input type="password" className='loginPageForm__password' name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                    <Button variant="contained" color="secondary" onClick={login}>
                        Login
                    </Button>
                </div>
            </div>
            <div className="login__navbar">
                <LoginNavbar />
            </div>
        </div>
    );

    async function login() {
        try {
            await auth.signInWithEmailAndPassword(email, password) /*  auth.signOut()  */
            history.replace('/home')
        } catch(error) {
            alert(error.message)
        }
    }
}
 
export default Login;