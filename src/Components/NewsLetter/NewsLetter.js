import React from 'react';
import './NewsLetter.css';
import { useForm } from 'react-hook-form';

const NewsLetter = () => {
    const {register,handleSubmit, formState : {errors}} = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <section style={{ backgroundColor: '#1a54e7' }} className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="content">
                            <h2 className="text-white">SUBSCRIBE TO OUR NEWSLETTER</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="input-group">
                                    <input type="email" className="form-control" placeholder="Enter your email" {...register('email',{required: true})} />
                                    {errors.email && <span>This fiels is required</span>}
                                    <span className="input-group-btn">
                                        <button className="btn" type="submit">Subscribe Now</button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;