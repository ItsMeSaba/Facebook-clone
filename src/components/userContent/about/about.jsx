import React from 'react';
import './about.css';

import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AboutRow from './aboutRow/aboutRow.jsx';


function About({ job, lives, from, relationship }) {
    return (
        <div className="about">
            <h3>About</h3>

            <div className="info">
                <AboutRow 
                    Icon={ <HomeIcon /> }  
                    text="Tbilisi"
                />

                <AboutRow 
                    Icon={ <WorkIcon /> }  
                    text="Jobless"
                />

                <AboutRow 
                    Icon={ <LocationOnIcon /> }  
                    text="Tbilisi"
                />

                <AboutRow 
                    Icon={ <FavoriteIcon /> }  
                    text="Single"
                />
            </div>
        </div>
    )
}



export default About;