import React from 'react';

import styles from './TerminatorCard.module.css';
import {Photo} from "@components";

import classNames from "classnames";

const TerminatorCard = ({photoUrl, altText, info, ...props}) => {
    return (
        <div>
            <div className={styles.card}>
                <div className={styles.photoContainer}>
                    <Photo src={photoUrl} alt={altText}/>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.infoItem}>
                        <span className={styles.infoItemLabel}>Модель: </span>
                        <span className={styles.infoItemText}>{info.model}</span>
                    </div>
                    <div className={styles.infoItem}>
                        <span className={styles.infoItemLabel}>Рост: </span>
                        <span className={styles.infoItemText}>{info.height}</span>
                    </div>
                    <div className={styles.infoItem}>
                        <span className={styles.infoItemLabel}>Вес: </span>
                        <span className={styles.infoItemText}>{info.weight}</span>
                    </div>
                    <div className={styles.infoItem}>
                        <span className={styles.infoItemLabel}>Скорость: </span>
                        <span className={styles.infoItemText}>{info.speed}</span>
                    </div>
                </div>
            </div>
            <div className={styles.description}>
                <span className={styles.infoItemLabel}>Описание: </span>
                <span className={styles.infoItemText}>{info.description}</span>
            </div>
        </div>
    );
};

export default TerminatorCard;