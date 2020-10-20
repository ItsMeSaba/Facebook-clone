import React from 'react';
import './images.css';

function Images({ cover, profile }) {
    return (
        <div className='images' style={{ backgroundImage : `url(${cover})` }}>
           <img src={profile} alt="" />
        </div>
    )
}


export default Images;