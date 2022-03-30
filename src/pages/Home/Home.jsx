import React from 'react';

import styles from './Home.module.css';

import {Photo} from "@components";
import photo from '@images/photo.jpg';


const Home = () => {
    return (
        <div className={styles.home}>
            <h1>Главная</h1>
            <div className={styles.homeContainer}>
                <div className={styles.photoContainer}>
                    <Photo src={photo} alt={"Фото"}/>
                </div>
                <div className={styles.infoContainer}>
                    <div>
                        <span>Модель: </span>
                        <span>Т-800</span>
                    </div>
                    <div>
                        <span>Прозвище: </span>
                        <span>"Дядя Боб"</span>
                    </div>
                    <div>
                        <span>Вес: </span>
                        <span>180кг</span>
                    </div>
                    <div>
                        <span>Вид: </span>
                        <span>Андроид</span>
                    </div>
                    <div>
                        <span>Пол: </span>
                        <span>Мужской</span>
                    </div>
                    <div>
                        <span>Род занятий: </span>
                        <span>Убийца, инфильтратор</span>
                    </div>
                    <div>
                        <a href='https://ru.wikipedia.org/wiki/T-800' target={"_blank"}>Больше информации...</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;