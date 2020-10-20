import React from 'react'
import './activeChat.css';
import ChatBody from './chatBody/chatBody';

import ChatsInfo from './chatsInfo/chatsInfo.jsx';
import MessageInput from './messageInput/messageInput.jsx';

function ActiveChat({ flex, setSettings }) {
    return (
        <div className='activeChat' style={{ flex : flex }}>
            <ChatsInfo 
                name='Saba'
                lastActive='Active Now'
                setSettings={setSettings}
            />

            <ChatBody />

            <MessageInput />
        </div>
    )
}

export default ActiveChat
