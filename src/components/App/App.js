import React from 'react';
import styles from './App.module.css';
import {BrowserRouter} from "react-router-dom";

import {Home} from '@pages';
import {Header} from "@layout";

const App = () => {
    return (
        <BrowserRouter>
            <div className={styles.app}>
                <Header/>
                <Home/>
            </div>
        </BrowserRouter>

    );
};

export default App;