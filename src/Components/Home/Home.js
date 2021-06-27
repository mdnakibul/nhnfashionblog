import React from 'react';
import Navbar from '../Navbar/Navbar';
import TopSlider from '../TopSlider/TopSlider';
import AllPost from '../AllPost/AllPost';
import NewsLetter from '../NewsLetter/NewsLetter';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <section className="main-container">
            <Navbar/>
            <TopSlider/>
            <AllPost/>
            <NewsLetter/>
            <Footer/>
        </section>
    );
};

export default Home;