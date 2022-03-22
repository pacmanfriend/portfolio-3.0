import React from 'react';

import homeStyles from './Home.module.css';

import {Image} from "@UI";

import Photo from '@images/kartinki-terminator-13.jpg';

const Home = () => {
    return (
        <div className={homeStyles.home}>
            <div className={homeStyles.homeContainer}>
                <div className={homeStyles.photoContainer}>
                    <Image src={Photo} alt={"Фото"}/>
                </div>
            </div>
        </div>
    );
};

export default Home;