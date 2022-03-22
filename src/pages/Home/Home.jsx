import React from 'react';

import './Home.css';
import Image from "../../components/UI/Image";

import img from './../../assets/images/kartinki-terminator-13.jpg';

const Home = () => {
    return (
        <div className='home'>
            <div className='home-container'>
                <div className='image'>
                    <Image src={img} alt={"Фото"} className="image image-medium"/>
                </div>
            </div>
        </div>
    );
};

export default Home;