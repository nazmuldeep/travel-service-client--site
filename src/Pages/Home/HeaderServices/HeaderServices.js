import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderService from './HeaderService'



const HeaderServices = () => {
    const [serviceData, setserviceData] = useState([]);
    useEffect(() => {
        fetch('https://travel-services-server-site.vercel.app/service')
            .then(res => res.json())
            .then(data => setserviceData(data))
    }, [])

    return (
        <>
            <div className='my-16'>
                <h1 className='text-white text-5xl text-center font-semibold'>Thanks For visting our site</h1>
                <h1 className='text-white text-2xl text-center font-semibold'> Here are some New travel places and Get offer this ocation  </h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 mt-5 sm:grid-cols-1 gap-5'>
                {
                    serviceData.map(service => <HeaderService key={service._id} service={service}></HeaderService>)
                }
            </div>
            <div className='m-auto text-center mt-12'>
                <button className='btn btn-info'><Link to={'/service'} >View All Service</Link></button>
            </div>
        </>
    );
};

export default HeaderServices;