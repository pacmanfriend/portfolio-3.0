import React from 'react';
import styles from './App.module.css';

import {Home} from '@pages';

const App = () => {
    return (
        <div className={styles.app}>
            <Home/>
        </div>
    );
};

export default App;