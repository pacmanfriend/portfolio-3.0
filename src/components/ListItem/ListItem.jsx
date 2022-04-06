import React from 'react';
import styles from './ListItem.module.css';

import {Photo} from "@components";
import {useLocation, useNavigate} from "react-router";
import {CommonButton} from "@UI";
import {useDispatch} from "react-redux";

const ListItem = ({terminator, children, ...props}) => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || `/card`;

    let dispatch = useDispatch();
    let cart = useLocation();

    let toCard = () => {
        navigate(from, {
            replace: true, state: {
                item: terminator
            }
        });
    }

    let addToCart = () => {
        dispatch({type: "ADD_ITEM", payload: terminator})
    }


    return (
        <div className={styles.card}>
            <div onClick={toCard}>
                <div>
                    <Photo src={terminator.photoUrl} alt={terminator.name}/>
                </div>
                <div className={styles.nameContainer}>
                    <span>{terminator.name}</span>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <CommonButton onClick={addToCart} text={'Добавить в корзину'}/>
            </div>
        </div>
    );
};

export default ListItem;