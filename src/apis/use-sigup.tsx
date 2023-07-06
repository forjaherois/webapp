import httpClient from '@src/configs/http-client';
import { useState } from 'react';

interface IAccountData {
    email: string;
    nickname: string;
    password: string;
}

export const useSignup = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const postAccount = async (data: IAccountData) => {
        setIsLoading(true);
        try {
            await httpClient.post('/account', data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(error);
        }
    };

    return { postAccount, isLoading, error };
};
