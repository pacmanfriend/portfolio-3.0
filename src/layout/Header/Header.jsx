import React from 'react';
import {NavLink} from "react-router-dom";
import {Outlet} from "react-router";

import styles from './Header.module.css';

const Header = () => {
    return (
        <>
            <div>
                <nav className={styles.header}>
                    <NavLink className={styles.item} to={'/'}>Главная</NavLink>
                    <NavLink className={styles.item} to={'/catalog'}>Каталог</NavLink>
                    <NavLink className={styles.item} to={'/cart'}>Корзина</NavLink>
                </nav>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    );
};

export default Header;