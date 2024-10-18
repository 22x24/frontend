import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from './index';

test('renders Dashboard component', () => {
  render(<Dashboard />);
  const welcomeText = screen.getByText(/Welcome Admin/i);
  expect(welcomeText).toBeInTheDocument();
});

test('switches between pages when sidebar links are clicked', () => {
  render(<Dashboard />);
  
  expect(screen.getByText('Users')).toBeInTheDocument();
  
  fireEvent.click(screen.getByText('Network'));
  expect(screen.getByText('Network Information')).toBeInTheDocument();
  
  fireEvent.click(screen.getByText('Dashboard'));
  expect(screen.getByText('Dashboard Overview')).toBeInTheDocument();
  
  fireEvent.click(screen.getByText('Users'));
  expect(screen.getAllByText('Name')[0]).toBeInTheDocument();
});