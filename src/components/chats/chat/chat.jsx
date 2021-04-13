import React from 'react'
import { Avatar } from '@material-ui/core';

import { Link } from 'react-router-dom';

import './chat.css';

function Chat({ name, lastText, time, uid }) {
    return (
        <Link className='chat' to={`/messanger/${uid}`}>
            <div className="aboutChat">
                <Avatar />

                <div className='info'>
                    <h4> { name } </h4>
                    
                    <h5> { lastText } </h5>
                </div>

            </div>

            <h5> { time } </h5>
        </Link>
    )
}

export default Chat;
