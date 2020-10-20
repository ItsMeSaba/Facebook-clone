import React from 'react'
import CurrentUser from './currentUser/currentUser';
import './chatSettings.css';

function ChatSettings({ display }) {
    return (
        <div className='chatSettings' style={{ display : display }}>
            <CurrentUser name='Saba' />
        </div>
    )
}

export default ChatSettings
