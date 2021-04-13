import React, { useState, useEffect } from 'react'
import './activeChat.css';
import ChatBody from './chatBody/chatBody';

import ChatsInfo from './chatsInfo/chatsInfo.jsx';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

import firebase from 'firebase/app'
// import db from '../../firebase/firestore'
import db from '../../firebase/firestore';

function ActiveChat({ flex, setSettings }) {
    let { userID } = useParams();
    let thisUserID = useSelector(state => state.uid);
    let [chatID, setChatID] = useState(null);
    let [user, setUser] = useState({
        username : '',
        activeStatus : ''
    })

    useEffect(() => {
        console.log(userID, thisUserID, 'logged')
        if(userID === 'x') {}
        else {
        try {
            db.collection('users').doc(`${userID}`).get()
                .then(user => setUser({ ...user, ...user.data() }));

            db.collection('users').doc(`${thisUserID}`).collection('chats').doc(`${userID}`).get()
                .then(async result => {

                    if(!result.exists) {
                        console.log('!RESULT');
                        let docID = db.collection('chats').doc();
                        console.log(docID.id, 'docID');
                        await Promise.all([
                            db.collection('users').doc(`${thisUserID}`).collection('chats').doc(`${userID}`).set({
                                chatID : docID.id
                            }, { merge : true }),

                            db.collection('users').doc(`${userID}`).collection('chats').doc(`${thisUserID}`).set({
                                chatID : docID.id
                            }, { merge : true }),
   
                            db.collection('chats').doc(`${docID.id}`).set({
                                userOne : thisUserID,
                                userTwo : userID
                            }, { merge : true })
                        ]);

                        return setChatID(docID.id);
                    }

                    let data = result.data();
                    console.log('DATA', data)
                    setChatID(data.chatID);
                })  

            } catch(e) {
                console.log('ACTIVECHAT ERROR', e);
            }
        }
    }, [userID, thisUserID])

    return (
        <div className='activeChat' style={{ flex : flex }}>
            <ChatsInfo 
                name={user.username}
                lastActive={user.activeStatus}
                setSettings={setSettings}
            />

            <ChatBody chatID={chatID} />

            <MessageInput chatID={chatID} thisUserID={thisUserID} userID={userID} />
        </div>
    )
}


function MessageInput({ chatID, thisUserID }) {
    let [inputValue, setInputValue] = useState('');
    
    
    function sendMessage(e) {
        console.log('sendMesage', chatID)
        e.preventDefault();     

        if(!chatID) return false;

        db.collection('chats').doc(`${chatID}`).collection('messages').add({
            uid : thisUserID,
            message : inputValue,
            time : firebase.firestore.FieldValue.serverTimestamp()
        })

        setInputValue('');
    }

    return (
        <form className='messageInput' onSubmit={sendMessage}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={e => setInputValue(e.target.value)}
                placeholder='Type A Message' 
            />

            <div>
                <ThumbUpAltIcon /> 
            </div>
        </form>
    )
}

export default ActiveChat
