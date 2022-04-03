import React from 'react';

import styles from './Home.module.css';
import logo_2 from '@images/logo/logo_2.jpg';
import classNames from 'classnames';

let cx = classNames.bind(styles);

const Home = () => {
    let infoTitleClass = classNames(styles.infoItem, styles.title);
    let infoTextClass = classNames(styles.infoItem, styles.text);
    let infoCopyrightClass = classNames(styles.infoItem, {[styles.copyright]: true})

    return (
        <div className={styles.home}>
            <div className={styles.info}>
                <span className={infoTitleClass}>Cyberdyne Systems</span>
                <span className={infoTextClass}>Разработка и производство киборгов.</span>
                <span className={infoCopyrightClass}>©Cyberdyne Systems, 1984-2022.</span>
            </div>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={logo_2} alt={'Cyberdyne Systems'}/>
            </div>
        </div>
    );
};

export default Home;