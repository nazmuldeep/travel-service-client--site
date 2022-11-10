import React, { useEffect, useState } from 'react';
import BannerItmes from './BannerItems';

const Banner = () => {
    const [bannerData, setBannerData] = useState([]);


    useEffect(() => {
        fetch('https://travel-services-server-site.vercel.app/banner')
            .then(res => res.json())
            .then(data => setBannerData(data))
    }, [])

    console.log(bannerData);


    return (
        <div className="carousel w-full rounded-xl mt-12">
            <h1>{bannerData.length}</h1>
            {
                bannerData.map(slider => <BannerItmes
                    key={slider._id} slider={slider}></BannerItmes>)
            }

        </div>
    );
};

export default Banner;