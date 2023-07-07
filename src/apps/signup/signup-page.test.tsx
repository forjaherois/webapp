import { render, screen } from '@testing-library/react';
import { SignupContext } from '@src/contexts/signup-context';
import { SignupPage } from './signup-page';

jest.mock('./components/signup-logo/signup-logo', () => {
    return {
        __esModule: true,
        SignupLogo: () => <div data-testid='signupLogo' />,
    };
});

jest.mock('./components/signup-form/signup-form', () => {
    return {
        __esModule: true,
        SignupForm: () => <div data-testid='signupForm' />,
    };
});

jest.mock('./components/signup-finish/signup-finish', () => {
    return {
        __esModule: true,
        SignupFinish: () => <div data-testid='signupFinish' />,
    };
});

describe('SignupPage Component', () => {
    it('renders SignupLogo and SignupForm when signupFinish is false', () => {
        const contextValue = {
            signupFinish: false,
            handleSignupFinsih: jest.fn(), // mock function
        };

        render(
            <SignupContext.Provider value={contextValue}>
                <SignupPage />
            </SignupContext.Provider>
        );

        expect(screen.getByTestId('signupLogo')).toBeInTheDocument();
        expect(screen.getByTestId('signupForm')).toBeInTheDocument();
        expect(screen.queryByTestId('signupFinish')).not.toBeInTheDocument();
    });

    it('renders SignupLogo and SignupFinish when signupFinish is true', () => {
        const contextValue = {
            signupFinish: true,
            handleSignupFinsih: jest.fn(), // mock function
        };

        render(
            <SignupContext.Provider value={contextValue}>
                <SignupPage />
            </SignupContext.Provider>
        );

        expect(screen.getByTestId('signupLogo')).toBeInTheDocument();
        expect(screen.getByTestId('signupFinish')).toBeInTheDocument();
        expect(screen.queryByTestId('signupForm')).not.toBeInTheDocument();
    });
});
