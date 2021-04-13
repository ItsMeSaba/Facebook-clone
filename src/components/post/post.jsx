import React, { useEffect, useState } from 'react';
import './post.css'

import { Link } from 'react-router-dom';

import { Avatar } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

import db from '../../firebase/firestore'

import { useSelector } from 'react-redux';
// import store from '../../redux/store'

function Post({ userid, name, date, post, profileImg, postId }) {
    let uid = useSelector(state => state.uid);
    let [isLiked, setIsLiked] = useState(false);
    let [likes, setLikes] = useState(0);
    let [displayComments, setDisplayComments] = useState(false);
    let [comments, setComments] = useState(null);

    useEffect(() => {
        db.collection('posts').doc(`${postId}`).collection('likes').doc(`${uid}`).get()
        .then(snapshot => {
            if(snapshot.data()) return setIsLiked(true);

            return setIsLiked(false);
        })

        db.collection('posts').doc(`${postId}`).collection('likes').get()
        .then(snapshot => {
            setLikes(snapshot.docs.length);
        })
    }, [postId, uid])

    function like(postId) {
        db.collection('posts').doc(`${postId}`).collection('likes').doc(`${uid}`).set({
            react : 'like'
        }, { marge : true });

        setLikes(++likes);
        setIsLiked(true);
    }

    function unlike(postId) {
        db.collection('posts').doc(`${postId}`).collection('likes').doc(`${uid}`).delete();

        setLikes(--likes);
        setIsLiked(false);
    }

    async function fetchComments(postId) {
        db.collection('posts').doc(`${postId}`).collection('comments').onSnapshot(async commentsQuery => {
            let promises = [];
            
            let comments = commentsQuery.docs.map(snapshot => {
                promises.push(db.collection('users').doc(`${snapshot.data().user}`).get());

                return {
                    ...snapshot.data(),
                    id : snapshot.id
                }
            })


            let users = await Promise.all(promises);

            comments = comments.map((comment, index) => ({
                ...comment,
                user : users[index].data()
            }))

            setComments(comments);
        })
    }
 
    return (
        <div className='post'>
            
            <Link to={`/${userid}`} className="top">
                { profileImg ? <img className='profileImg' alt='profImage' src={profileImg} /> : <Avatar /> }

                <div className="info">
                    <h4>{ name }</h4>

                    <h6>{ date }</h6>
                </div>    
            </Link>

            <p> { post } </p>

            <h5 className='reacts'>{ likes } reacts</h5>

            <div className="actions">
                <div 
                    className="like" 
                    style={{ color : isLiked ? 'blue' : 'rgb(140, 140, 140)' }}
                    onClick={ isLiked === null ? '' : isLiked === false ? () => like(postId) : () => unlike(postId)  }
                >
                    <ThumbUpAltIcon />
                </div>

                <div className="comment" onClick={() => {
                    setDisplayComments(() => !displayComments)
                    if(comments === null) fetchComments(postId);
                }}>
                    <ChatIcon />
                </div>
                
                <div className="share">
                    <ShareIcon />
                </div>
            </div>

            <div className='commentsSection' style={{ display : displayComments ? 'block' : 'none' }}>
                <AddComment uid={uid} postId={postId} />
                { comments === null ? 'Loading' : comments === undefined || comments.length === 0 ? 'No Comments' :
                    comments.map(x => <Comment username={x.user.username} data={x.text} />)
                }

            </div>
        </div>
    )
}

function Comment({ username, data }) {
    return (
        <div className="comment">
            <div>
                <Avatar />
            </div>

            <p className='commentText'><span className='username'>{ username }</span>{ data }</p>
        </div>
    )
}

function AddComment({ postId, uid }) {
    let [comment, setComment] = useState('');

    function upload(e) {
        e.preventDefault();

        db.collection('posts').doc(`${postId}`).collection('comments').add({
            text: comment,
            user : uid
        });

        setComment('');
    }

    return (
        <form className="addComment" onSubmit={upload}>
            <input type="text" value={comment} onChange={e => setComment(e.target.value)} />

            <div className='addCommentIcon'>
                <SendIcon />
            </div>
        </form>
    )
}

export default Post;