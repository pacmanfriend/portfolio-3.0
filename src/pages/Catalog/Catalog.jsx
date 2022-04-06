import React from 'react';
import {ListItem} from "@components";

import t600 from '@images/terminators/t-600.jpg';
import t800 from '@images/terminators/t-800.jpg';
import t850 from '@images/terminators/t-850.jpg';

import styles from './Catalog.module.css';
import {useDispatch, useSelector} from "react-redux";

const Catalog = () => {
    let terminators = useSelector(state => state.catalog.terminators);

    return (
        <div className={styles.catalog}>
            <div>
                <h1 className={styles.title}>Каталог</h1>
            </div>
            <div className={styles.itemsList}>
                {
                    terminators.map((item, i) => {
                        return <ListItem key={i} terminator={item}/>
                    })
                }
            </div>
        </div>
    );
};

export default Catalog;