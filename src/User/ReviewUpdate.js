import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../Hook/useTitle';


const ReviewUpdate = () => {
    useTitle('Update Review')
    const updateReview = useLoaderData()

    const [currentReview, setCurrentReview] = useState([])

    // time
    const current = new Date();
    const date = `${current.getDate()
        }/${current.getMonth() + 1}/${current.getFullYear()} /${current.toLocaleTimeString()}`

    // update file
    const review = {
        currentReview,
        date: date,
    }
    const handleSubmit = event => {

        event.preventDefault()
        fetch(`https://travel-services-server-site.vercel.app/${updateReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    // updating file



    const handleChange = event => {
        const FieldName = event.target.name;
        const FieldValue = event.target.value;
        console.log(FieldName, FieldValue);
        const newUser = { ...currentReview };
        newUser[FieldName] = FieldValue;
        setCurrentReview(newUser);
    }
    return (
        <div>
            <h1>Please Update Your Review</h1>
            <p></p>
            <form onSubmit={handleSubmit} className="card-body w-96 my-24 mx-auto">
                <h1 className="text-5xl text-white text-center font-bold">Review Here</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Review</span>
                    </label>
                    <textarea onChange={handleChange} defaultValue={updateReview.currentReview.review} rows="4" cols="50" name="review" placeholder="Review here" className="input input-bordered" required></textarea>
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">submit</button>
                </div>
            </form>
        </div>
    );
};

export default ReviewUpdate;