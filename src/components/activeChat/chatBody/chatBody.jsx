import React from 'react'
import Message from './message/message'
import './chatBody.css'


function ChatBody() {
    return (
        <div className='chatBody'>
            <Message message='Hi' mine={true} />                      
            <Message message='Hello' mine={false} />                      
            <Message message='Whats up' mine={true} />                      
            <Message message='Sky' mine={false} />                      
            <Message message='ba dum tss' mine={false} />                      
        </div>
    )
}

export default ChatBody
