import React, { useEffect, useState, useRef } from 'react'
import Message from './message/message'
import './chatBody.css'

import { useSelector } from 'react-redux';

import db from '../../../firebase/firestore';

function ChatBody({ chatID }) {
    let [messages, setMessages] = useState([]);
    let uid = useSelector(state => state.uid);
    let divRef = useRef();
    let dummyRef = useRef();

    useEffect(() => {
        if(chatID) db.collection('chats').doc(`${chatID}`).collection('messages').orderBy('time', 'asc').onSnapshot(snapshot => {
            let div = divRef.current;
            let toScroll = false;

            if(div.scrollTop + div.clientHeight >= div.scrollHeight-50) {
                console.log('heights', div.scrollTop, div.clientHeight, div.scrollHeight)
                toScroll = true;
            }

            let messagesArr = snapshot.docs.map(doc => ({
                ...doc.data(),
                docID : doc.id
            }))


            setMessages(messagesArr);

            if(toScroll) {
                // div.scrollTop = 3000;
                // dummyRef.current.scrollIntoView({ behavior : 'smooth' });
                dummyRef.current.scrollIntoView({ behavior : 'smooth' });
            }
        })
    }, [chatID]);

    function DisplayMessages() {
        return messages.map(x =>  <Message key={x.docID} message={x.message} mine={x.uid === uid} />)
    }

    return (
        <div className='chatBody' ref={divRef}>
            <DisplayMessages />

            <div ref={dummyRef}></div>
        </div>
    )
}

export default ChatBody
