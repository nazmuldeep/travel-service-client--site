import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './../../../image/1.jpg';
import img2 from './../../../image/2.jpg';
import img3 from './../../../image/3.jpg'
import HearderService from './HeaderService';
const BannerData = [
    {
        image: img1,
        prev: 6,
        _id: 1,
    },
    {
        image: img2,
        prev: 1,
        _id: 2,
    },
    {
        image: img3,
        prev: 2,
        _id: 3,
    }
]
const HeaderServices = () => {
    return (
        <>
            <div className='my-16'>
                <h1 className='text-white text-5xl text-center font-semibold'>Come Get Involved With Us</h1>
                <h1 className='text-white text-2xl text-center font-semibold'> Here are some New and updated photos from our Innovations  </h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 mt-5 sm:grid-cols-1 gap-5'>
                {
                    BannerData.map(service => <HearderService key={service._id} service={service}></HearderService>)
                }
            </div>
            <div className='m-auto text-center mt-12'>
                <button className='btn btn-info'><Link to={'/service'} >View All Service</Link></button>
            </div>
        </>
    );
};

export default HeaderServices;