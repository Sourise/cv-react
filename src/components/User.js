import React from 'react';
import "./User.css";
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import DriveEtaIcon from '@material-ui/icons/DriveEta';

function User() {
    return (
        <div className="user">
            <img src="./images/avatar.jpg" alt="" />
            
            <h1>Développeur Full Stack</h1>
                <p>Souleiman ROULLIN</p>

            <div className="user_infos">
                <p className="user_info"><HomeIcon /> 4 rue des Rossignols, Bompas (66430)</p>
                <p className="user_info"><EventIcon /> Date de naissance : 24 juin 1996</p>
                <p className="user_info"><PhoneIcon /><a href="tel:+33760201392"> 07 60 20 13 92</a></p>
                <p className="user_info"><MailIcon /><a href="mailto:souleimanb@outlook.fr"> souleimanb@outlook.fr</a></p>
                <p className="user_info"><DriveEtaIcon /> Permis B</p>

            </div>
        </div>
    );
}

export default User;