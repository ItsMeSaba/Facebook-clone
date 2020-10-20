import React from 'react';
import './header.css';

import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Link } from 'react-router-dom';

function Header() {
    return (

        <div className="header">
            <div className="header-left">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/10/flogo_RGB_HEX-BRC-Site-250.png?w=250&h=250" alt=""/>
            
                <div className="header-input">
                    <input type="text" placeholder="Search Facebook" id="" />
                </div>
            </div>


            <div className="header-center">
                <Link to='/' className="header-icon active">
                    <HomeIcon />
                </Link>

                <Link to='/profile' className="header-icon">
                    <SupervisedUserCircleIcon />
                </Link>

                <div className="header-icon">
                    <FlagIcon />
                </div>

                <div className="header-icon">
                    <SubscriptionsOutlinedIcon />
                </div>

                <div className="header-icon">
                    <StorefrontOutlinedIcon />
                </div>
            </div>


            <div className="header-right">
                
                <IconButton>
                    <AddIcon />
                </IconButton>
                
                <IconButton>
                    <ForumIcon />
                </IconButton>
                
                <IconButton>
                    <NotificationIcon />
                </IconButton>
                
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            
            </div>
        </div>
  
    )
}


export default Header;