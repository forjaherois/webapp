import { HomePage } from '@src/apps/home/home-page';
import { SignupPage } from '@src/apps/signup/signup-page';
import { Routes, Route } from 'react-router-dom';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<SignupPage />} />
            <Route path='/home' element={<HomePage />} />
        </Routes>
    );
};
