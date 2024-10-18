import React from 'react';
import { render, screen } from '@testing-library/react';
import DashboardPage from './DashboardPage';

test('renders DashboardPage component', () => {
  render(<DashboardPage />);
  const headerText = screen.getByText(/Dashboard Overview/i);
  expect(headerText).toBeInTheDocument();
  const contentText = screen.getByText(/This is the Dashboard page/i);
  expect(contentText).toBeInTheDocument();
});