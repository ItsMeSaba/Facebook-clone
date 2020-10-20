import { Avatar } from '@material-ui/core';
import React from 'react'

import './message.css';

function Message({ message, mine }) {
    let align = { justifyContent: mine ? 'flex-end' : 'flex-start' };
    
    return (
        <div className='message' style={ align } >
            { mine && <div className="text"> { message } </div> }
            
            <div>
                <Avatar />
            </div>

            { !mine && <div className="text"> { message } </div> }
        </div>
    )
}

export default Message;
