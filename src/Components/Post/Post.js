import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../../images/default-thumbnail.jpg'

const Post = (props) => {
    const post = props.post;
    const postId = props.post._id;
    return (
        <div className="col-md-4 mb-4">
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={post.img || defaultImg} alt="Card cap" />
                <div className="card-body">
                    <Link to={`/post/${postId}`}><h5 className="card-title">{post.title || post.email}</h5></Link>
                    <p className="card-text">{post.content.slice(0,36)}</p>
                    <Link to='/' className="btn btn-primary">Read More</Link>
                </div>
            </div>
        </div>
    );
};

export default Post;