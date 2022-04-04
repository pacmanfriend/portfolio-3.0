import React from 'react';

import styles from './CommonButton.module.css';
import classNames from "classnames";

const CommonButton = ({text, onClick, className, ...props}) => {
    let classes = classNames(styles.button, className);

    return (
        <button className={classes} onClick={onClick} {...props}>{text}</button>
    );
};

export default CommonButton;