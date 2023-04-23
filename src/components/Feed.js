import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import AddPost from './AddPost';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <AddPost />
            <Post 
                profilePic= "https://storage.googleapis.com/kaggle-avatars/images/1765403-gp.jpg"
                username = "Tripti Chhetri"
                message = "wow this works"
                timestamp= "this is a timestamp"
                image = "https://www.freecodecamp.org/news/content/images/2022/01/alexander-sinn-KgLtFCgfC28-unsplash.jpg"
            />
            
        </div>
    )
}

export default Feed;