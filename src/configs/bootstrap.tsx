import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';

const Bootstrap = () => {
    return (
        <BrowserRouter>
            <NextUIProvider>
                <Router />
            </NextUIProvider>
        </BrowserRouter>
    );
};

export default Bootstrap;
