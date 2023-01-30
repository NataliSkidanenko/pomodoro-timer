import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/reset.scss';
import './styles/main.scss';
import {Provider} from 'react-redux';
import {store} from './rdx/store';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);
