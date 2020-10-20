import React from 'react'
import './more.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function MoreRow({ Icon, text }) {
    return (
        <div className="moreRow">
            <Icon />

            <h4>{ text }</h4>
        </div>
    )
}

function More() {
    return (
        <div className='more'>
            <MoreRow 
                Icon={ExitToAppIcon}
                text="Log out"
            />
        <div/>
    )
}

export default More
