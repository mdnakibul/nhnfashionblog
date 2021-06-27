import React from 'react';
// Import Images 
import featureImage1 from '../../images/feature01.jpg'
import featureImage2 from '../../images/feature02.jpg'
import featureImage3 from '../../images/feature03.jpg'
import authorImage from '../../images/writter01.jpg'

import TopSliderBlock from '../TopSliderBlock/TopSliderBlock';
import './TopSlider.css'

const TopSlider = () => {
    const today = new Date().toLocaleDateString();
    console.log(today);

    // Generate fake data for the slider 
    const sliderData = [
        {
            autorImg: authorImage,
            featureImage: featureImage1,
            title: "Maecenas quis lobortis nunc. Nullam sit vel odio congue vulputate a ut nisi.",
            category: "people",
            date: today,
            authorName: "Inva"            
        },
        {
            autorImg: authorImage,
            featureImage: featureImage2,
            title: "Maecenas quis lobortis nunc. Nullam sit vel odio congue vulputate a ut nisi.",
            category: "people",
            date: today,
            authorName: "Inva"            
        },
        {
            autorImg: authorImage,
            featureImage: featureImage3,
            title: "Maecenas quis lobortis nunc. Nullam sit vel odio congue vulputate a ut nisi.",
            category: "people",
            date: today,
            authorName: "Inva"            
        },
    ]
    
    const slides = document.getElementsByClassName('carousel-item');
    if(document.readyState === 'loading'){
        console.log("loading");
        setTimeout(function(){
            slides[1].classList.remove('active');
            slides[2].classList.remove('active');
        },500)
        
    }
    

    return (
        <section className="top-slider">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {
                        sliderData.map(sliderData => <TopSliderBlock sliderData={sliderData}></TopSliderBlock>)
                    }
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </section>
    );
};

export default TopSlider;