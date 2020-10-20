import React from 'react';
import './main.css'

import Stories from '../../components/stories/stories.jsx';
import Posts from '../../components/posts/posts.jsx';
import Sidebar from '../../components/sidebar/sidebar.jsx';
import Header from '../../components/header/header.jsx';
import More from '../../components/more/more.jsx';

function Main() {
    return (
        <div className="main">
            <Header />
            
            <div className='feed'>
                <More />

                <div className="left">
                    <Sidebar />
                </div>

                <div className="center">
                    <Stories />
                    <Posts />
                </div>
            </div>
        </div>
    )
}



export default Main;