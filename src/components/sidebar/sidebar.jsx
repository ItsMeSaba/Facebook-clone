import React from 'react';
import './sidebar.css'; 
import SidebarRow from './sidebarRow/sidebarRow.jsx';

import EmojiFlagIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow Icon={EmojiFlagIcon} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <Link to='/messanger'><SidebarRow Icon={ChatIcon} title='Messanger' /></Link>
            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title='More' />
        </div>
    )
}


export default Sidebar;