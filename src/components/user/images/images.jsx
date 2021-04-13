import React from 'react';
import './images.css';

function Images({ cover, profile }) {
    let profileImage = profile || 'https://homewoodfamilyaz.org/wp-content/uploads/2017/04/square_profile_pic_male.png';

    return (
        <div className='images' style={{ backgroundImage : `url(${cover})` }}>
           <img src={profileImage} alt="" />
        </div>
    )
}


export default Images;