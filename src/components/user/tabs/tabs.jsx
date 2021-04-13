import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MessageIcon from '@material-ui/icons/Message';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import db from '../../../firebase/firestore'
// import store from '../../../redux/store'
import { useSelector } from 'react-redux'

import './tabs.css'

function Tabs({ profileUID, isYourProfile }) {
    let uid = useSelector(state => state.uid);
    let [isFollowed, setIsFollowed] = useState(false); 
    let ref = db.collection('users').doc(`${uid}`).collection('following').doc(`${profileUID}`)

    useEffect(() => {
        ref.get().then(snapshot =>{
            if(snapshot.data()) setIsFollowed(true);
        })
    }, [ref])

    function follow() {
        console.log('sdsa', isFollowed)
        if(!isFollowed) {
            setIsFollowed(true);
            return ref.set({ followed : true }, { merge : true });
        }

        setIsFollowed(false);
        ref.delete();
    }

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
                { !isYourProfile &&
                    <>
                        <button onClick={() => follow()}>
                            { isFollowed ? 'Unfollow' : 'Follow' }
                        </button>

                        <div> <MessageIcon fontSize='small' /> </div>
                    </>
                }

                <div> <MoreHorizIcon fontSize='small' /> </div>
            </div>

        </div>
    )
} 

export default Tabs;


