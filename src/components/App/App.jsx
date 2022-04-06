import React from 'react';
import styles from './App.module.css';
import {Route} from "react-router-dom";
import {Routes} from 'react-router';

import {Home, Catalog, Cart, TerminatorCard} from '@pages';
import {Header} from "@layout";
import {NotFound} from "@errors";

const App = () => {
    return (
        <div className={styles.app}>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'/catalog'} element={<Catalog/>}/>
                    <Route path={'/card/'} element={<TerminatorCard/>}/>
                    <Route path={'/cart'} element={<Cart/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;