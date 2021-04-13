import React from 'react'
import './more.css'


import { auth } from '../../firebase/auth' 

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function MoreRow({ Icon, text }) {
    return (
        <div className="moreRow">
            <Icon />

            <h4>{ text }</h4>
        </div>
    )
}

function More({ displayMore }) {
    return (
        <div className='more' style={{ display : displayMore ? 'initial' : 'none' }}>
            <div
              onClick={() => auth.signOut()}
            >
                <MoreRow 
                    Icon={ExitToAppIcon}
                    text="Log out"
                />
            </div>
        </div>
    )
}

export default More
