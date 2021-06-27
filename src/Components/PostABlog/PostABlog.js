import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const PostABlog = () => {
    const axios = require('axios');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL,setImageURL] = useState('');
    const history = useHistory();

    // Upload Image 
    const handleImageUpload = (event)=>{
        document.getElementById('post-upload-btn').disabled = true;
        console.log(event.target.files[0]);
        const imgData = new FormData();
        imgData.set('key','aab4383b0506f1fa7e90aa51571f2c5c');
        imgData.append('image',event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imgData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
            console.log(imageURL);
            document.getElementById('post-upload-btn').disabled = false;
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    const onSubmit = (data) => {
        data.img = imageURL;
        data.date = new Date().toDateString();
        console.log(data);
        fetch('https://polar-gorge-40384.herokuapp.com/uploadPost',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(response => response.json())
        .then(success =>{
            if(success){
                document.getElementById('post-upload-form').reset();
                alert('Post Uploaded Succesfully')
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    // Go to Admin Homepage 

    const adminHome = ()=>{
        history.push('/admin')
    }

    return (
        <div className="w-50 m-auto">
            <form onSubmit={handleSubmit(onSubmit)} id="post-upload-form">
                <div className="form-group">
                    <label htmlFor="title">Post Title</label>
                    <input type="title" {...register("title", { required: true })} className="form-control" id="title" aria-describedby="postTitle" placeholder="Enter Post Title" />
                    <small id="titleHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    {errors.title && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="contentt">Post Content</label>
                    <input type="text" {...register("content", { required: true })} className="form-control" id="content" placeholder="Write post content" />
                    {errors.content && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="author">Atuhor</label>
                    <input defaultValue="admin" {...register("author", { required: true })} type="text" className="form-control" id="author" />
                    {errors.author && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="category">Select Category</label>
                    <select defaultValue="other" {...register("category", { required: true })} id="category">
                        <option value="people">People</option>
                        <option value="nature">Nature</option>
                        <option value="fasion">Fasion</option>
                        <option value="tricks">Tricks</option>
                        <option value="tech">Tech</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.category && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="feature-image">Feature Image</label>
                    <input type="file" {...register("featureImage")} onChange={(event)=>handleImageUpload(event)} className="form-control-file" id="feature-image" />
                    {errors.featureImage && <span>This field is required</span>}
                </div>
                <button type="submit" className="btn btn-primary" id="post-upload-btn" >Submit</button>
            </form>
            <button className="btn btn-primary d-block m-auto" onClick={adminHome}>Go To Admin Homepage</button>
        </div>
    );
};

export default PostABlog;