import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import Banner from '../Home/Banner/Banner';
import Service from './Service';

const Services = () => {
    useTitle('All Service')
    const [servicesData, setservicesData] = useState([]);
    useEffect(() => {
        fetch('https://assignment-server-11-taupe.vercel.app/services')
            .then(res => res.json())
            .then(data => setservicesData(data))
    }, [])
    const current = new Date();
    const date = `${current.getDate()}${current.getMonth() + 1}${current.getFullYear()}`
    return (<
        div>
        <Banner></Banner>
        <div className='gap-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto my-16'>
            {
                servicesData.map(allService => <Service key={allService._id} allService={allService}></Service>)
            }
        </div>
        <div className='text-center my-20'>
            <p>{date}</p>
            <button className='btn btn-info'><Link to={'/addservice'}>Add Service</Link></button>
        </div>
    </div>
    );
};

export default Services;