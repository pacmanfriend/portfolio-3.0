import React, {useState} from 'react';
import styles from './CartItem.module.css';
import {CommonButton} from "@UI";
import {useDispatch} from "react-redux";
import {Photo} from "@components";

const CartItem = ({terminator, ...props}) => {
    const [counter, setCount] = useState(1);

    let dispatch = useDispatch();

    const increment = () => {
        setCount(counter + 1);
    }

    const decrement = () => {
        setCount(counter - 1)
    }

    const remove = () => {
        dispatch({type: "REMOVE_ITEM", payload: terminator.name})
    }

    return (
        <div className={styles.item}>
            <div className={styles.counter}>
                {counter}
            </div>
            <div className={styles.info}>
                <span>Модель: </span>
                <span>{terminator.name}</span>
                <div className={styles.imgContainer}>
                    <img className={styles.img} src={terminator.photoUrl} alt={terminator.name}/>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <CommonButton onClick={increment} text={'+'}/>
                <CommonButton onClick={decrement} text={'-'}/>
                <CommonButton onClick={remove} text={'Удалить'}/>
            </div>
        </div>
    );
};

export default CartItem;