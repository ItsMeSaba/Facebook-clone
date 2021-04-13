import React, { useState } from 'react';
import './header.css';

// import { InstantSearch, SearchBox, connectHits, connectStateResults } from 'react-instantsearch-dom';
// import algoliasearch from 'algoliasearch/lite';

import AlgoliaSearch from '../../algoliaSearch/algoliaSearch';

import More from '../more/more.jsx'

import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Link } from 'react-router-dom';
import store from '../../redux/store';

// import { isActive } from './isActive';

function Header() {
    let { uid } = store.getState();
    let [displayMore, setDisplayMore] = useState(false);

    return (
        <div className="header">
            <div className="header-left">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/10/flogo_RGB_HEX-BRC-Site-250.png?w=250&h=250" alt=""/>
            

                <AlgoliaSearch type='header' />
            </div>


            <div className="header-center">
                <Link to='/' className={`header-icon`}>
                    <HomeIcon />
                </Link>

                <Link to={`/${uid}`} className={`header-icon`}>
                    <SupervisedUserCircleIcon />
                </Link>

                <Link to={`/messanger/x`} className={`header-icon`}>
                    <ForumIcon />
                </Link>

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
                    <FlagIcon />
                </IconButton>
                
                <IconButton>
                    <NotificationIcon />
                </IconButton>
                
                <IconButton onClick={() => setDisplayMore(!displayMore)}>
                    <ExpandMoreIcon />
                </IconButton>
            </div>


            <div className="mobile-header-bottom">
                <Link to='/' className="header-icon active">
                    <HomeIcon />
                </Link>

                <Link to={`/${uid}`} className="header-icon">
                    <SupervisedUserCircleIcon />
                </Link>

                <Link to='/messanger/x' className="header-icon">
                    <ForumIcon />
                </Link>
   
                <IconButton onClick={() => setDisplayMore(!displayMore)}>
                    <ExpandMoreIcon />
                </IconButton>
            </div>

            <More 
                displayMore={displayMore}
            />
        </div>
  
    )
}


export default Header;