import React from 'react';
import { render, screen } from '@testing-library/react';
import NetworkPage from './NetworkPage';

test('renders NetworkPage component', () => {
  render(<NetworkPage />);
  const headerText = screen.getByText(/Network Information/i);
  expect(headerText).toBeInTheDocument();
  const contentText = screen.getByText(/This is the Network page/i);
  expect(contentText).toBeInTheDocument();
});