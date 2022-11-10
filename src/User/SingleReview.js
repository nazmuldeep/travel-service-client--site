import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const SingleReview = ({ review, handleDelete }) => {
    const { date, servicePhotoUrl, location, userphotoURL, currentReview } = review



    return (

        <tr>
            <th>{date}</th>
            <td>{location}</td>
            <td>
                <PhotoProvider>
                    <PhotoView src={servicePhotoUrl}>
                        <img className='w-12 h-12' src={servicePhotoUrl} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </td>
            <td>{review.userdisplayName ? review.userdisplayName : review.userEmail}</td>
            <td>
                <div className='w-12 h-12'>
                    {
                        review.userphotoURL ? <><img src={userphotoURL} alt="" /></> :
                            <><FaUserAlt /></>
                    }
                </div>
            </td>
            <td>{currentReview.review}</td>
            <td><button className='btn btn-warning'><Link to={`/update/${review._id}`}>Update</Link></button></td>
            <td><button onClick={() => handleDelete(review._id)} className='btn btn-error'>Delete</button></td>
        </tr>

    );
};

export default SingleReview;