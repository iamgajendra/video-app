import React from 'react';
import './Navigation.css';
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import HomeIcon from "@material-ui/icons/Home";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { useHistory } from 'react-router-dom';
import { auth } from './firebase';



const Navigation = () => {

    const history = useHistory();

    async function logout() {
        await auth.signOut()
        history.replace('/')
    }

    return (  
        <div className="navigation">
            <HomeIcon className="navigation__icon" onClick={() => history.push('/home')} />
            <AddAPhotoIcon className="navigation__icon" onClick={() => history.push('/upload')} />
            <PowerSettingsNewIcon className="navigation__icon" onClick={logout} />
        </div>
    );

}
 
export default Navigation;