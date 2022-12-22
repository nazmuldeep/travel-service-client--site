import React from 'react';
import About from '../About/About';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import HeaderServices from './HeaderServices/HeaderServices';


const Home = () => {
    return (
        <div className='bg-white'>
            <Banner></Banner>
            <HeaderServices></HeaderServices>
            <Gallery></Gallery>
            <About />
        </div>
    );
};

export default Home;