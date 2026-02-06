// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders solidityHub title', () => {
    render(<App />);
    const titleElement = screen.getByText(/solidityHub/i);
    expect(titleElement).toBeInTheDocument();
});
