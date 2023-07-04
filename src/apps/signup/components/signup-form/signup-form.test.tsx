import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { SignupForm } from './signup-form';

describe('<SignupForm />', () => {
    beforeEach(() => {
        render(<SignupForm />);
    });

    it('should render SignupForm correctly', () => {
        const signupForm = screen.getByTestId('signup-form');
        expect(signupForm).toBeInTheDocument();
    });

    it('should change value when typing in the inputs', () => {
        const emailInput = screen.getByLabelText('email');
        fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
        expect((emailInput as HTMLInputElement).value).toBe('test@test.com');

        const nicknameInput = screen.getByLabelText('nickname');
        fireEvent.change(nicknameInput, { target: { value: 'testNickname' } });
        expect((nicknameInput as HTMLInputElement).value).toBe('testNickname');

        const passwordInput = screen.getByLabelText('senha');
        fireEvent.change(passwordInput, { target: { value: 'testPassword' } });
        expect((passwordInput as HTMLInputElement).value).toBe('testPassword');
    });
});
