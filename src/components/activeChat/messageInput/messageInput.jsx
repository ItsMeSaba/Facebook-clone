import React from 'react';
import './messageInput.css';

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

function MessageInput() {
    return (
        <div className='messageInput'>
            <input type="text" placeholder='Type A Message' />

            <div>
                <ThumbUpAltIcon /> 
            </div>
        </div>
    )
}

export default MessageInput
