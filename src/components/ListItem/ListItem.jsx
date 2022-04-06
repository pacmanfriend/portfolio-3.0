import React from 'react';
import styles from './ListItem.module.css';

import {Photo} from "@components";
import {useLocation, useNavigate} from "react-router";
import {CommonButton} from "@UI";

const ListItem = ({terminator, children, ...props}) => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || `/card`;

    let toCard = () => {
        navigate(from, {
            replace: true, state: {
                item: terminator
            }
        });
    }

    let addToCart = () => {

    }

    return (
        <div onClick={toCard} className={styles.card}>
            <div>
                <Photo src={terminator.photoUrl} alt={terminator.name}/>
            </div>
            <div className={styles.nameContainer}>
                <span>{terminator.name}</span>
            </div>
            <div className={styles.buttonContainer}>
                <CommonButton onClick={addToCart} text={'Добавить в корзину'}/>
            </div>
        </div>
    );
};

export default ListItem;