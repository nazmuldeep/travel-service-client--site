import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const HearderService = ({ service }) => {
    const { photoUrl, _id, rating } = service
    return (
        <div className=' bg-zinc-400 relative'>
            <div className="w-full h-[430px]">
                <PhotoProvider>
                    <PhotoView src={photoUrl}>
                        <img src={photoUrl} alt="" className='w-full h-full' />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className=" absolute w-full top-2/4">
                <div className="flex justify-between w-10/12 mx-10 my-4">

                    <h1 className='text-xl bg-cyan-400 text-black'>Review: {rating}</h1>
                </div>
            </div>
            <div className=" absolute w-full top-3/4">
                <div className="flex justify-between w-10/12 mx-10 my-4">
                    <button className='btn  hover:bg-cyan-600'><Link to={`/singleService/${_id}`}>View more</Link></button>
                    <button className='btn hover:bg-cyan-600'><Link to={`/singleService/${_id}`}>Review</Link></button>
                </div>
            </div>
        </div>
    );
};

export default HearderService;