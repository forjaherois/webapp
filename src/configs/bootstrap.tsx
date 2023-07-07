import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';
import { SignupProvider } from '@src/contexts/signup-context';

const Bootstrap = () => {
    return (
        <BrowserRouter>
            <NextUIProvider>
                <SignupProvider>
                    <Router />
                </SignupProvider>
            </NextUIProvider>
        </BrowserRouter>
    );
};

export default Bootstrap;
