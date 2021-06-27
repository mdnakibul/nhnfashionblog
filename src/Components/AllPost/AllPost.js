import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Post from '../Post/Post';

const AllPost = () => {
    // Generate fake data for the posts 

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://polar-gorge-40384.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])


    return (
        <div className="container mt-5">
            <div className="row">
                {
                    posts.map(post => <Post post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default AllPost;