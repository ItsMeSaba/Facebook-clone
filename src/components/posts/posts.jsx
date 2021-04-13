import React, { useEffect, useState } from 'react';
import InputBox from '../inputBox/inputBox.jsx'
import Post from '../post/post.jsx'
import './posts.css'

// import { useCollection } from 'react-firebase-hooks/firestore'
import db from '../../firebase/firestore'

function Posts() {
    let [arr, setArr] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('createdAt', 'desc').onSnapshot(snapshot => {
            let promises = [];
            let posts = snapshot.docs.map(doc => {
                promises.push(db.collection('users').where('uid', '==', doc.data().uid).get());
                
                return  { 
                    post : {
                        ...doc.data(),
                        postId: doc.id
                    }
                }
            })

            Promise.all(promises).then(users => {
                posts = posts.map((x, index) => ({
                    ...x,
                   user : users[index].docs[0].data()
                }))

                setArr(posts);
            })
        })
    }, [])

    return (
        <div className='posts'>
            <InputBox />

            <PostsArray arr={arr ? arr : false} />
        </div>
    )
}

function PostsArray({ arr }) {
    if(!arr) return false;

    return arr.map((x, index) => {
        let { post, user } = x;

        return (
            <Post
                userid={user.uid}
                key={index}
                name={user.username}
                date={post.createdAt?.toDate().toUTCString()}
                post={post.post}
                profileImg={user.profileImage}
                postId={post.postId}
                likes={post.likes}
            />
        )
    })                                           
}


export default Posts;