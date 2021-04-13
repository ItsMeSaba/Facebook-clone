import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './user.css';

// import store from '../../redux/store';
import db from '../../firebase/firestore'
import { useSelector } from "react-redux";

import EditIcon from '@material-ui/icons/Edit';
import { Close } from '@material-ui/icons';


// import Images from './images/images.jsx';
import Tabs from './tabs/tabs.jsx';

function User() {
    let { profileUID } = useParams();
    let [user, setUser] = useState(null);
    let thisUser = useSelector(state => state);
    let { uid, profileImage } = useSelector(state => ({ 
        uid : state.uid,
        profileImage : state.profileImage,
     }));
    let isYourProfile = profileUID === uid ? true : false;

    useEffect(() => {
        if(profileUID === uid) {
            setUser(thisUser);
        }

        else {
            db.collection('users').where('uid', '==', profileUID).get()
            .then(user => setUser(user.docs[0].data()))
            .catch(() => setUser(false));
        }
    }, [profileUID, thisUser, uid])

    if(user === null) return <p>Loading</p>;
    
    if(user === false) return <h1>User not found</h1>;

    return (
        <div className='user'>
            <div className="container">
                <Images 
                    canEdit={isYourProfile}
                    cover='https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                    profile={ profileImage }
                />
            
                <h1 className='username'>{ user.username }</h1>

                <h5 className='bio'>Your bio goes here</h5>

                <hr/>

                <Tabs profileUID={profileUID} isYourProfile={isYourProfile} />
            </div>
        </div>
    )
}

function Images({ canEdit, cover, profile }) {
    let [displayEdit, setDisplayEdit] = useState(false);
    // let { uid } = useSelector(state => state.uid);  
    let profileImage = profile || 'https://homewoodfamilyaz.org/wp-content/uploads/2017/04/square_profile_pic_male.png';
    
    return (
        <>
            <div className='images' style={{ backgroundImage : `url(${cover})` }}>
                { canEdit && <div className="edit" onClick={() => setDisplayEdit(!displayEdit)}>
                    <EditIcon />
                </div> }

                <img src={profileImage} alt="" />
            </div>

            { displayEdit && <Editor setDisplayEdit={() => setDisplayEdit(!displayEdit)} profileImage={profileImage} /> }
        </>
    )
}

function Editor({ setDisplayEdit, profileImage }) {
    let [username, setUsername] = useState('');
    let [profileURL, setProfileURL] = useState('');
    let [coverURL, setCoverURL] = useState('');
    let { uid } = useSelector(state => state.uid);  

    async function updateData() {
        let obj = {};

        if(username.length > 6) obj.username = username;

        if(profileURL.length > 6) obj.profileImage = profileURL;

        if(coverURL > 6) obj.coverImage = coverURL;

        
        if(Object.entries(obj).length > 0) {
            let user = await db.collection('users').where('uid', '==', uid).get();
            
            let userID = user.docs[0].id;

            db.collection('users').doc(userID).update(obj);
        }
    }    
    
    return (
        <div className="editor">
            <div className="close" onClick={setDisplayEdit}>
                <Close />
            </div>

            <div className="box username">
                <p>Username</p>

                <input 
                    type="text" 
                    value={username} 
                    placeholder='Username'
                    onChange={e => setUsername(e.target.value)}
                />
            </div>
 
            <div className="box imageURL">
                <p>Profile Image</p>
                
                <div className="container">
                    {/* <img src={profileImage} alt="" /> */}

                    <input 
                        type="text" 
                        placeholder='Image URL' 
                        value={profileURL}
                        onChange={e => setProfileURL(e.target.value)}
                    />
                </div>
            </div>

            <div className="box imageURL">
                <p>Cover Image</p>
                
                <div className="container">
                    {/* <img src='' alt="" /> */}

                    <input 
                        type="text" 
                        placeholder='Image URL' 
                        value={coverURL}
                        onChange={e => setCoverURL(e.traget.value)}
                    />
                </div>
            </div>

            <div className='buttons'>
                <input type="submit" value='cancel' onClick={setDisplayEdit} />

                <input type="submit" value='save' onClick={updateData} />
            </div>
        </div>
    )
}



export default User;