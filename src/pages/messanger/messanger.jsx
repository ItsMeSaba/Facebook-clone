import React, { useState } from 'react';
import './messanger.css'

import Chats from '../../components/chats/chats.jsx';
import Header from '../../components/header/header.jsx';
import ActiveChat from '../../components/activeChat/activeChat.jsx';
import ChatSettings from '../../components/chatSettings/chatSettings';

function Messanger() {
    let [settings, setSettings] = useState(false);

    return (
        <div className="messanger">
            <Header />

            <div className="container">
                <Chats />

                <ActiveChat flex={ settings ? 0.55 : 0.75 } setSettings={() => setSettings(!settings)}/>

                <ChatSettings display={ settings ? 'flex' : 'none' } />
            </div>
        </div> 
    )
}


export default Messanger;