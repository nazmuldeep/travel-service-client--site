import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ allService }) => {
    const { photoUrl, Location, Description, rating, _id } = allService
    return (
        <div>
            <div className="card w-96 bg-orange-100 m-auto shadow-xl">
                <figure className='h-[350px]'><img className='w-full h-full' src={photoUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {Location}
                        <div className="badge badge-secondary">rating{rating}</div>
                    </h2>
                    <p>
                        {
                            Description.slice(0, 100)
                        }...
                    </p>
                    <div className="card-actions justify-end">
                        <button className='btn btn-info'><Link to={`/singleService/${_id}`}>Read More</Link></button>
                        <button className='btn btn-info'><Link to={`/singleService/${_id}`}>make a review</Link></button>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Service;