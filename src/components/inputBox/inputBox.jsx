import React from 'react';
import { Avatar } from '@material-ui/core';

import './inputBox.css';


function InputBox() {
    return (
        <div className="inputBox">
            <div className="top">
                <Avatar fontSize='xs' />

                <input type="text" placeholder="What's on your mind?"/>
            </div>
        </div>
    )
}



export default InputBox;