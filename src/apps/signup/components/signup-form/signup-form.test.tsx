import { render, screen, waitFor } from '@testing-library/react';
import { useSignup } from '@src/apis/use-sigup';
import userEvent from '@testing-library/user-event';
import { SignupForm } from './signup-form';

jest.mock('@src/apis/use-sigup');

describe('SignupForm Component', () => {
    let mockPostAccount: jest.Mock;

    beforeEach(() => {
        mockPostAccount = jest.fn();
        (useSignup as jest.Mock).mockImplementation(() => ({ postAccount: mockPostAccount, isLoading: false }));
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should render correctly', () => {
        render(<SignupForm />);
        expect(screen.getByTestId('signup-form')).toBeInTheDocument();
    });

    it('should not call postAccount when the data is invalid', async () => {
        render(<SignupForm />);

        const emailInput = screen.getByLabelText('email');
        const nicknameInput = screen.getByLabelText('nickname');
        const passwordInput = screen.getByLabelText('senha');
        const submitButton = screen.getByText('enviar');

        userEvent.type(emailInput, 'test');
        userEvent.type(nicknameInput, 'testNickname');
        userEvent.type(passwordInput, 'testPassword');
        userEvent.click(submitButton);

        await waitFor(() => expect(mockPostAccount).not.toHaveBeenCalled());
    });
});
