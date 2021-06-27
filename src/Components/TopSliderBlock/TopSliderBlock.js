import React from 'react';
import { Link } from 'react-router-dom';

const TopSliderBlock = (props) => {
    const slider = props.sliderData;
    return (
        <div className="carousel-item active text-center" style={{ background: `linear-gradient(0deg, rgba(12, 12, 12, 0.6), rgba(12, 12, 12, 0.4)), url(${slider.featureImage}) center no-repeat`, minHeight: '400px', backgroundSize: "cover" }}>
            <img src={slider.autorImg} alt="Author" className="mt-5" />
            <h3 className="mx-auto pt-3 text-white">{slider.title}</h3>
            <div className="post-meta d-flex justify-content-around mt-5">
                <Link to="/" className="btn btn-primary">{slider.category}</Link>
                <p>
                    <span className="text-white">{slider.date} | </span>
                    <Link to="/" className="text-primary">{slider.authorName}</Link>
                </p>
            </div>
        </div>
    );
};

export default TopSliderBlock;