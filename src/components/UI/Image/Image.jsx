import React from 'react';

import './Image.css';

const Image = ({src, alt, ...props}) => {
    return (
        <img src={src} alt={alt} {...props}/>
    );
};

export default Image;