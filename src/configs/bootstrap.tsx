import { NextUIProvider } from '@nextui-org/react';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';

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
