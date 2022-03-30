import React from 'react';
import {NavLink} from "react-router-dom";

import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <NavLink className={styles.item} to={'/'}>Главная</NavLink>
            <NavLink className={styles.item} to={'/#'}>Каталог</NavLink>
            <NavLink className={styles.item} to={'/##'}>Корзина</NavLink>
        </div>
    );
};

export default Header;