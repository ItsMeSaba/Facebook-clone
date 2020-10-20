import { Avatar } from '@material-ui/core';
import React from 'react';
import './post.css'

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';


function Post({ name, date, post }) {
    return (
        <div className='post'>
            <div className="top">
                <Avatar />

                <div className="info">
                    <h4>{ name }</h4>

                    <h6>{ date }</h6>
                </div>    
            </div>

            <p> {post} </p>

            <div className="actions">
                <div className="like">
                    <ThumbUpAltIcon />
                </div>

                <div className="comment">
                    <ChatIcon />
                </div>
                
                <div className="share">
                    <ShareIcon />
                </div>
            </div>
        </div>
    )
}



export default Post;