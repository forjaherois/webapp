import { NextUIProvider } from '@nextui-org/react';
import { Router } from './configs/Router';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <NextUIProvider>
                <Router />
            </NextUIProvider>
        </BrowserRouter>
    );
};

export default App;
