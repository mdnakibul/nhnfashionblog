import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './AddAdmin.css'

const AddAdmin = () => {

    const history = useHistory();

    const adminHome = () => {
        history.push('/admin')
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://polar-gorge-40384.herokuapp.com/addAdmin',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(data => {
            if(data){
                alert('Admin Added Succesfully')
            }
        })
        .catch(error => console.log(error.message))
    };
    return (
        <div>
            <section className="subscribe-area pb-50 pt-70">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4">
                            <div className="subscribe-text mb-15">
                                <span>JOIN OUR TEAM</span>
                                <h2>Make An Admin</h2>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="subscribe-wrapper subscribe2-wrapper mb-15">
                                <div className="subscribe-form">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input placeholder="enter your email address" type="email" {...register("email", { required: true })} />
                                        {errors.email && <span>This field is required</span>}
                                        <button type="submit" className="mt-2">Add Admin <i className="fas fa-long-arrow-alt-right"></i></button>
                                    </form>
                                </div>
                            </div>
                            <button className="btn btn-warning d-block m-auto" onClick={adminHome}>Go To Admin Homepage</button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default AddAdmin;