import React from 'react';
import InputBox from '../inputBox/inputBox.jsx'
import Post from '../post/post.jsx'

function Posts() {
    return (
        <>
            <InputBox />
            <Post 
                name = 'Saba'
                date = 'Thursday ar 2:04 PM'
                post = 'kinda sus'
            />
        </>
    )
}


export default Posts;