import React from 'react';
import './stories.css';
import Story from './story/story.jsx';

function Stories() {
    return (
        <div className="stories">
            <Story 
                image='https://images.unsplash.com/photo-1566895291281-ea63efd4bdbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                name='Saba'
            />
            <Story 
                image='https://images.unsplash.com/photo-1576562492346-af59df6a1504?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                name='Saba'
            />
            <Story 
                image='https://images.unsplash.com/photo-1587924386279-caa7734f21f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                name='Saba'
            />
        </div>
    )
}

export default Stories;