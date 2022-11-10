import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hook/useTitle';

import ShowServiceReview from './ShowServiceReview';

const SingleService = () => {
    useTitle('Service')
    const { user } = useContext(AuthContext)
    const [currentReview, setCurrentReview] = useState([])
    const service = useLoaderData()
    const { photoUrl, Location, rating, Description, _id } = service
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}/${current.toLocaleTimeString()}`

    const [sreverReviw, setServerReviw] = useState([])

    useEffect(() => {
        fetch(`https://travel-services-server-site.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setServerReviw(data))
    }, [])

    const review = {
        userEmail: user?.email,
        userdisplayName: user?.displayName,
        userphotoURL: user?.photoURL,
        location: Location,
        servicePhotoUrl: photoUrl,
        currentReview,
        date: date,
        serviceId: _id
    }

    const handleSubmit = event => {

        event.preventDefault()
        fetch('https://travel-services-server-site.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    const handleBlur = event => {
        const FieldName = event.target.name;
        const FieldValue = event.target.value;
        console.log(FieldName, FieldValue);
        const newUser = { ...currentReview };
        newUser[FieldName] = FieldValue;
        setCurrentReview(newUser);
    }

    return (
        <div>
            <div className="card w-10/12 bg-orange-100 m-auto shadow-xl">
                <figure className=''><img className='w-full h-full' src={photoUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {Location}
                        <div className="badge badge-secondary">rating {rating}</div>
                    </h2>
                    <p>
                        {
                            Description
                        }
                    </p>

                </div>

            </div>
            {
                user?.email ?
                    <>
                        <form onSubmit={handleSubmit} className="card-body w-96 my-24 mx-auto">
                            <h1 className="text-5xl text-white text-center font-bold">Review Here</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Review</span>
                                </label>
                                <textarea onBlur={handleBlur} rows="4" cols="50" name="review" placeholder="Review here" className="input input-bordered" required></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">submit</button>
                            </div>
                        </form>
                    </> : <>
                        <div className='w-100 mx-auto text-center my-11'>
                            <h1 className='text-5xl my-5'>For Review Login Here</h1>
                            <button className='btn btn-info mx-auto'><Link to={'/login'}>Login</Link></button>
                        </div>
                    </>
            }

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-10/12 mx-auto'>
                {
                    sreverReviw.map(serviceReview => <ShowServiceReview key={serviceReview._id} serviceReview={serviceReview}></ShowServiceReview>)
                }
            </div>
        </div>
    );
};

export default SingleService;