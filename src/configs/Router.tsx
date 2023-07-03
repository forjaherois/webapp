import { Route, Routes } from 'react-router-dom';
import { SignupPage } from '../apps/signup/signup-page';
import { HomePage } from '../apps/home/home-page';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<SignupPage />} />
            <Route path='/home' element={<HomePage />} />
        </Routes>
    );
};
