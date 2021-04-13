import React, { useState } from 'react';
import './messanger.css'

import Chats from '../../components/chats/chats.jsx';
// import Header from '../../components/header/header.jsx';
import ActiveChat from '../../components/activeChat/activeChat.jsx';
import ChatSettings from '../../components/chatSettings/chatSettings';

import { useSelector } from 'react-redux';

function Messanger() {
    let [settings, setSettings] = useState(false);
    let uid = useSelector(state => state.uid);

    return ( 
        <div className="messanger">
            {/* <Header /> */}

            <div className="container">
                <Chats uid={uid} />

                <ActiveChat flex={ settings ? 0.55 : 1 } setSettings={() => setSettings(!settings)}/>

                <ChatSettings display={ settings ? 'flex' : 'none' } />
            </div>
        </div> 
    )
}


export default Messanger;