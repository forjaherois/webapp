import { ReactNode, createContext, useState } from 'react';

type SignupData = {
    signupFinish: boolean;
    handleSignupFinsih: () => void;
};

export const SignupContext = createContext<SignupData>({} as SignupData);

export const SignupProvider = ({ children }: { children: ReactNode }) => {
    const [signupFinish, setSignupFinish] = useState<boolean>();
    const handleSignupFinsih = () => setSignupFinish(!signupFinish);

    return <SignupContext.Provider value={{ signupFinish, handleSignupFinsih }}>{children}</SignupContext.Provider>;
};
