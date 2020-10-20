import React from 'react';
import './profile.css';

import User from '../../components/user/user.jsx';
import UserContent from '../../components/userContent/userContent.jsx';
import Header from '../../components/header/header.jsx';

function Profile() {
    return (
        <div className="profile">
            <Header />

            <User name='Saba' />

            <UserContent /> 
        </div>
    )
}

export default Profile;