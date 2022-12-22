import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

const SingleGallary = ({ hReview }) => {
    const { date, userphotoURL, currentReview } = hReview
    // const { review } = currentReview
    return (
        <div className='pic'>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            {
                                hReview?.userphotoURL ? <>
                                    <img src={userphotoURL} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                </> : <>
                                    <FaUserAlt className='object-cover w-12 h-12' />
                                </>
                            }

                        </div>
                        <div>
                            <h4 className="font-bold">{hReview?.userdisplayName ? hReview.userdisplayName : hReview.userEmail}</h4>
                            <span className="text-xs dark:text-gray-400">{date}</span>
                        </div>
                    </div>

                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                    <p>{currentReview?.review}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleGallary;