import { render, screen } from '@testing-library/react';
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

describe('SignupPage Component', () => {
    it('renders SignupLogo and SignupForm', () => {
        render(<SignupPage />);

        expect(screen.getByTestId('signupLogo')).toBeInTheDocument();
        expect(screen.getByTestId('signupForm')).toBeInTheDocument();
    });
});
