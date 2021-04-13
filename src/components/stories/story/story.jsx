import React from 'react';
// import { Avatar } from '@material-ui/core';
import './story.css'

function story({ image, name }) {
    let style = {
        background: `linear-gradient( rgba(0, 0, 0, .3), rgba(0, 0, 0, .3) ), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosiion: 'center'
    }

    return (
        <div className='story' style = { style }>
            {/* <Avatar src={profileSrc} className=''/> */}
            <h4> {name} </h4>
        </div>
    )
}



export default story;