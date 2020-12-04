import React,{useState} from 'react';
import './Register.css';
import LoginNavbar from './LoginNavbar';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { auth } from './firebase';


const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const history = useHistory();

    return (  
        <div className="register">
            <div className='register__page'>
                <div className="registerPage__head">
                    <h1>Register</h1>
                </div>
                <div className="registerPage__form">
                    <input type="text"  name="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
                    <input type="email"  name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
                    <input type="password"  name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                    <Button variant="contained" color="secondary" onClick={register} >
                        Register
                    </Button>
                </div>
            </div>
            <div className="register__navbar">
                <LoginNavbar />
            </div>
        </div>
    );

    async function register() {
        try {
            await auth.createUserWithEmailAndPassword(email, password)
            await auth.currentUser.updateProfile({
                displayName: username
            })
            history.replace('/home')
        } catch(error) {
            alert(error.message)
        }
    }

}
 
export default Register;