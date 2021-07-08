import React from 'react';
import constants from '../../utils/contants';

interface PhotoWrapperProps {
    imageTitle: string,
    hasOverlay: boolean;
}

const getImageSrc = (imageTitle: string) => {
    return `${constants.assetsPath}/${imageTitle}`;
}

function PhotoWrapper(props: PhotoWrapperProps, ) {
    return (
        <div className="photo-wrapper">
            <img 
                alt={props.imageTitle.slice(0,-4)} 
                src={getImageSrc(props.imageTitle)}
            />
        </div>
    );
}
export default PhotoWrapper;