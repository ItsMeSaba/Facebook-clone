import React from 'react';
import { Link } from 'react-router-dom';

import MessageIcon from '@material-ui/icons/Message';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import './tabs.css'

function Tabs() {
    return (
        <div className="tabs">

            <div className="left">
                <Link><h3>Timeline</h3></Link>
                <Link><h3>About</h3></Link>
                <Link><h3>Friends</h3></Link>
                <Link><h3>Photos</h3></Link>
                <Link><h3>Videos</h3></Link>
            </div>

            <div className="right">
                <button>Add Friend</button>

                <div> <MessageIcon fontSize='small' /> </div>
                
                <div> <MoreHorizIcon fontSize='small' /> </div>
            </div>

        </div>
    )
} 

export default Tabs;


