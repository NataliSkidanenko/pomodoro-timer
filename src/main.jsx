import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './rdx/reducer';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/reset.scss';
import './styles/main.scss';
import {Provider} from 'react-redux';
const store = configureStore({reducer});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
