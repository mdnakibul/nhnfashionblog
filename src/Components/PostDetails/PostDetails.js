import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaultImg from '../../images/default-thumbnail.jpg';
import Navbar from '../Navbar/Navbar';

const PostDetails = () => {
    const {postId} = useParams();
    console.log(typeof postId);
    const [singlePost,setSinglePost] = useState({});

    const url = `https://polar-gorge-40384.herokuapp.com/post/${postId}`
    useEffect(()=>{

        fetch(url).then(
            res => res.json()
        )
        .then(data => {
            setSinglePost(data)
            console.log(singlePost)}
            )
    }
    ,[postId])


    return (
        <section>
            <Navbar/>
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <img className="card-img-top" src={singlePost.img || defaultImg} alt="Card cap" />
                    <h2 className="mt-3">{singlePost.title || singlePost.email}</h2>
                    <p>
                        {singlePost.content}
                    </p>
                </div>
            </div>
        </div>
        </section>
    );
};

export default PostDetails;