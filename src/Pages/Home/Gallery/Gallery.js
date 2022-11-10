import React, { useEffect, useState } from 'react';
import SingleGallary from './SingleGallary';


const Gallery = () => {
    const [homeReview, setHomeReview] = useState([])
    useEffect(() => {
        fetch('https://travel-services-server-site.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setHomeReview(data))

    }, [])

    return (
        <>
            <div className='mt-16'>
                <h1 className='text-white text-5xl text-center font-semibold'>User Reviews</h1>
                <h1 className='text-white text-2xl text-center font-semibold'> here some review form Our user </h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-9'>
                {
                    homeReview.map(hReview => <SingleGallary key={hReview._id} hReview={hReview}></SingleGallary>)
                }
            </div>
        </>
    );
};

export default Gallery;