import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const HearderService = ({ service }) => {
    const { image } = service
    return (
        <div>
            <PhotoProvider>
                <PhotoView src={image}>

                    <img src={image} alt="" />
                </PhotoView>
            </PhotoProvider>
        </div>
    );
};

export default HearderService;