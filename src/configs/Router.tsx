import { Route, Routes } from 'react-router-dom';
import { SignupPage } from '../apps/signup-page/signup-page';
import { HomePage } from '../apps/home-page/home-page';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<SignupPage />} />
            <Route path='/home' element={<HomePage />} />
        </Routes>
    );
};
