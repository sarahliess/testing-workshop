import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SuperButton from './SuperButton';

it('should change the text after clicking the button', () => {
  render(<SuperButton />);
  const button = screen.getByText(`I'm an awesome button`);
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  expect(screen.getByText(`I'm not a super awesome button?`)).toBeInTheDocument();
});

it('should have a red background color', () => {
  render(<SuperButton />);
  const button = screen.getByText(`I'm an awesome button`);
  expect(button).toHaveStyle(`background-color: red`);
});
