import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Post from '../../post/post.jsx';
import './usersPosts.css'

import db from '../../../firebase/firestore'

function UsersPosts() {
    let { profileUID } = useParams();
    let [posts, setPosts] = useState([]);
 
    useEffect(() => {
        fetchPosts(profileUID, setPosts);
    }, [profileUID])

    return (
        <div className="posts">
            <DisplayPosts posts={posts} />
        </div>
    )
}

async function fetchPosts(id, setPosts) {
    let userQuery = await db.collection('users').doc(`${id}`).get();
    let user = userQuery.data();

    console.log('user', user)

    db.collection('posts').where('uid', '==', user.uid).orderBy('createdAt', 'desc').onSnapshot(snapshot => {
        let posts = snapshot.docs.map(doc => ({
            ...doc.data(),
            postId: doc.id,
            user : user
        }))

        console.log('fetchedposts', posts);
        setPosts(posts);
    })
}

const DisplayPosts = ({ posts }) => {
    console.log('posts', posts)

    return posts.map(postInfo => {
        const {createdAt, postId, user, post} = postInfo;
        
        return (
            <Post
                userid={user.uid}
                name={user.username}
                date={createdAt?.toDate().toUTCString()}
                postId={postId}
                post={post}
            />
        )
    })
}


export default UsersPosts;