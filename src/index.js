import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import {App} from "@components";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);