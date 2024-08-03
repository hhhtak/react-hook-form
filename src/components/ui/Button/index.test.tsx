import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Button', () => {
  test('renders App component', () => {
    render(<Button>hogehoge</Button>);
    const buttonElement = screen.getByRole('button', { name: 'hogehoge' });

    expect(buttonElement).toBeInTheDocument();
  });
});
