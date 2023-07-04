import { render } from '@testing-library/react';
import { SignupPage } from './signup-page';
import '@testing-library/jest-dom';

describe('SignupPage', () => {
    it('renders SignupLogo and SignupForm', () => {
        const { getByTestId } = render(<SignupPage />);

        const signupLogo = getByTestId('signup-log');
        const signupForm = getByTestId('signup-form');

        expect(signupLogo).toBeInTheDocument();
        expect(signupForm).toBeInTheDocument();
    });
});
