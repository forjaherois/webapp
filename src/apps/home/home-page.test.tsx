import { render, screen } from '@testing-library/react';
import { HomePage } from './home-page';

test('renders the HomePage component and checks the conten', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { name: 'Home Page' })).toBeInTheDocument();
});
