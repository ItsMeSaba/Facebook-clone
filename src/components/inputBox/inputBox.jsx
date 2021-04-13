import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import store from '../../redux/store';
import db from '../../firebase/firestore'
import firebase from 'firebase/app'
// import { useSelector } from 'react-redux'

import './inputBox.css';


function InputBox() {
    let [inpValue, setInpValue] = useState('');
    let { photoURL, uid } = store.getState();

    function uploadPost(e) {
        e.preventDefault();

        if(!inpValue) return false;

        db.collection('posts').add({
            uid,
            post : inpValue,
            createdAt : firebase.firestore.FieldValue.serverTimestamp(),
            likes : {}
        })

        setInpValue('');
    }

    return (
        <form 
            className="inputBox"
            onSubmit={uploadPost}
        >
            <div className="top">
                { photoURL ? <img src={photoURL} alt='userAvatar' /> : <Avatar fontSize='xs' />}

                <input 
                    type="text" 
                    value={inpValue} 
                    onChange={x => setInpValue(x.target.value)} 
                    placeholder="What's on your mind?"
                />
            </div>
        </form>
    )
}



export default InputBox;