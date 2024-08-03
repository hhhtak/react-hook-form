import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Mock } from 'vitest';
import { ContactForm } from '.';
import { useContactForm } from './useContactForm.hook';

describe('ContactForm', () => {
  test('renders ContactForm component', () => {
    useContactForm as Mock;
    render(<ContactForm />);
    expect(true).toBeTruthy();
  });
});
