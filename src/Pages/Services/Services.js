import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const current = new Date();
    const date = `${current.getDate()}${current.getMonth() + 1}${current.getFullYear()}`
    return (<
        div>
        <div className='text-center my-20'>
            <p>{date}</p>
            <button className='btn btn-info'><Link to={'/addservice'}>Add Service</Link></button>
        </div>
    </div>
    );
};

export default Services;