import React from 'react';
import styles from './Cart.module.css';
import {useDispatch, useSelector} from "react-redux";
import CartItem from "@components/CartItem/CartItem";

const Cart = () => {
    let dispatch = useDispatch();
    let cartItems = useSelector(state => state.cart.cartItems)


    return (
        <div className={styles.cart}>
            <div className={styles.title}>
                <h1>
                    Корзина
                </h1>
            </div>
            <div className={cartItems}>
                {cartItems.map((item, i) => {
                    return <CartItem terminator={item} key={i * 0.25}/>
                })}
            </div>
        </div>
    );
};

export default Cart;