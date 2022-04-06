import React from 'react';

import styles from './TerminatorCard.module.css';
import {Photo} from "@components";

import classNames from "classnames";
import {useLocation, useParams} from "react-router";

const TerminatorCard = ({photoUrl, altText, info, ...props}) => {
    let params = useParams();
    console.log(params);

    let location = useLocation();

    let item = location.state.item;

    return (
        <div>
            <div className={styles.card}>
                <div className={styles.photoContainer}>
                    <Photo src={item.photoUrl} alt={item.name}/>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.infoItem}>
                        <span className={styles.infoItemLabel}>Модель: </span>
                        <span className={styles.infoItemText}>{item.name}</span>
                    </div>
                    <div className={styles.infoItem}>
                        <span className={styles.infoItemLabel}>Рост: </span>
                        <span className={styles.infoItemText}>{item.height}</span>
                    </div>
                    <div className={styles.infoItem}>
                        <span className={styles.infoItemLabel}>Вес: </span>
                        <span className={styles.infoItemText}>{item.weight}</span>
                    </div>
                    <div className={styles.infoItem}>
                        <span className={styles.infoItemLabel}>Скорость: </span>
                        <span className={styles.infoItemText}>{item.speed}</span>
                    </div>
                    <div className={styles.infoItem}>
                        <span className={styles.infoItemLabel}>Описание: </span>
                        <span className={styles.infoItemText}>{item.description}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TerminatorCard;