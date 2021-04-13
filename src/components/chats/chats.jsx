import React, { useEffect, useState } from 'react';
import './chats.css';
import Chat from './chat/chat.jsx';

import AlgoliaSearch from '../../algoliaSearch/algoliaSearch';
import { useSelector } from 'react-redux';
import db from '../../firebase/firestore';


function Chats() {
    let uid = useSelector(state => state.uid);
    let [chats, setChats] = useState([]);

    useEffect(() => {
        db.collection('users').doc(`${uid}`).collection('chats').onSnapshot(async snapshot => {
            // let chatsArr = snapshot.docs.map(doc => ({
            //     ...doc.data(),
            //     uid : doc.id
            // }));

            // setChats(chatsArr);

            let promises = [];

            snapshot.docs.forEach(x => promises.push(db.collection('users').doc(`${x.id}`).get()));

            let resolved = await Promise.all(promises);
            
            let users = resolved.map(x => ({
                ...x.data(),
                uid : x.id
            }))

            setChats(users)
        })
    }, [uid])

    function DisplayChats() {
        return chats.map((data, index) => {
            let { username, uid } = data;

            return <Chat 
                name={ username }
                lastText='Wassup Brah'
                time='22:20'
                mine='true'
                uid={uid}
            />
        })
    }

    return (
        <div className="chats">
            {/* <input type="text" placeholder='Search Messanger' /> */}
            <div className="messangerSearch">
                <AlgoliaSearch type="messanger" />
            </div>        

            <DisplayChats />

        </div>
    )
}


export default Chats;