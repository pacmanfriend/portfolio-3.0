import React from 'react';
import {useLocation, useNavigate} from "react-router";

import styles from './NotFound.module.css';
import {CommonButton} from "@UI";

const NotFound = () => {
    let location = useLocation();
    let navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const toHomePage = () => {
        navigate(from, {replace: true});
    }

    return (
        <div className={styles.container}>
            <div>
                <p className={styles.text404}>404</p>
                <p className={styles.text}>Page not Found</p>
            </div>
            <div className={styles.buttonContainer}>
                <CommonButton text={'На главную'} onClick={toHomePage}/>
            </div>
        </div>
    );
};

export default NotFound;