import React from 'react';

import './user.css';
import Images from './images/images.jsx';
import Tabs from './tabs/tabs.jsx';

function User({ name }) {
    return (
        <div className='user'>
            <div className="container">
                <Images 
                    cover='https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                    profile='https://homewoodfamilyaz.org/wp-content/uploads/2017/04/square_profile_pic_male.png'
                />
            
                <h1> {name} </h1>

                <h5>Your bio goes here</h5>

                <hr/>

                <Tabs />
            </div>
        </div>
    )
}


export default User;