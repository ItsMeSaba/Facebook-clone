import React from 'react';
import './userContent.css';

import About from './about/about.jsx';
import InputBox from '../inputBox/inputBox.jsx';
import UsersPosts from './usersPosts/usersPosts.jsx';

function UserContent() {
    return (
        <div className="userContent">
            <div className="left">
                <About />
            </div>

            <div className="right">
                <InputBox />

                <UsersPosts />
            </div>
        </div>
    )
}


export default UserContent;