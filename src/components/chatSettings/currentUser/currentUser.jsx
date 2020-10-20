import { Avatar } from '@material-ui/core';
import React from 'react'
import './currentUser.css';

function CurrentUser({ name }) {
    return (
        <div className="currentUser">
            <div>
                <Avatar  fontSize='large' />
            </div>

            <h3> { name } </h3>
        </div>
    )
}

export default CurrentUser
