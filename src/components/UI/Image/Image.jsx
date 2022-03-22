import React from 'react';

import styles from './Image.module.css';

const Image = ({src, alt, ...props}) => {
    return (
        <img className={styles.image} src={src} alt={alt} {...props}/>
    );
};

export default Image;