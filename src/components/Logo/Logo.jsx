import React from 'react';

import logo from '@images/logo/logo.png';

import styles from './Logo.module.css';

const Logo = () => {
    return (
        <div>
            <img className={styles.logo} src={logo} alt={"Cyberdyne Systems"}/>


        </div>
    );
};

export default Logo;