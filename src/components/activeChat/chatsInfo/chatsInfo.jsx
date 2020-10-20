import React from 'react'
import './chatsInfo.css';

import PhoneIcon from '@material-ui/icons/Phone';
import VideocamIcon from '@material-ui/icons/Videocam';
import InfoIcon from '@material-ui/icons/Info';
import { Avatar } from '@material-ui/core';

function ChatsInfo({ name, lastActive, setSettings }) {
    return (
        <div className='chatsInfo'>
            <div className='userDetails'>
                <Avatar fontSize='large' />

                <div>
                    <h3> { name } </h3>
                    <h6> { lastActive } </h6>
                </div>
            </div>

            <div></div>

            <div className='icons'>
                <div> <PhoneIcon /> </div>
                <div> <VideocamIcon /> </div>
                <div onClick={setSettings}> <InfoIcon /> </div>
            </div>
        </div>
    )
}

export default ChatsInfo
