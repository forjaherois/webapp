import React from 'react';
import Bootstrap from './configs/bootstrap';
import ReactDOM from 'react-dom';
import { worker } from './mocks/server';

if (process.env.NODE_ENV === 'development') {
    worker.start();
}
ReactDOM.render(
    <React.StrictMode>
        <Bootstrap />
    </React.StrictMode>,
    document.getElementById('root')
);
