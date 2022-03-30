import React from 'react';

import styles from './Photo.module.css';

const Photo = ({src, alt, ...props}) => {
    return (
        <div>
            <img className={styles.photo} src={src} alt={alt}/>
        </div>
    );
};

export default Photo;