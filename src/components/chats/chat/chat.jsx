import React from 'react'
import { Avatar } from '@material-ui/core';

import './chat.css';

function Chat({ name, lastText, time }) {
    return (
        <div className='chat'>
            <div className="aboutChat">
                <Avatar />

                <div className='info'>
                    <h4> { name } </h4>
                    
                    <h5> { lastText } </h5>
                </div>

            </div>

            <h5> { time } </h5>
        </div>
    )
}

export default Chat;
